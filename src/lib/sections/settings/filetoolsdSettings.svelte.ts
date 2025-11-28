import { ip, type IpInfo } from "$lib/util/ip";
import { Settings } from "./index.svelte";
import { PUB_FILETOOLSD_URL } from "$env/static/public";

const LOCATIONS = [
	{
		latitude: 49.0976,
		longitude: 12.4869,
		url: "https://eu.filetoolsd.filetools.app",
	},
	{
		latitude: 47.6587,
		longitude: -117.426,
		url: "https://usa.filetoolsd.filetools.app",
	},
];

const toRad = (value: number) => (value * Math.PI) / 180;
const haversine = (lat1: number, lon1: number, lat2: number, lon2: number) => {
	const R = 6371; // km
	const dLat = toRad(lat2 - lat1);
	const dLon = toRad(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(lat1)) *
		Math.cos(toRad(lat2)) *
		Math.sin(dLon / 2) *
		Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	const d = R * c;
	return d;
};

export type FileToolsDInner =
	| { type: "auto" }
	| { type: "eu" }
	| { type: "us" }
	| { type: "custom" };

export class FileToolsDInstance {
	public static instance = new FileToolsDInstance();

	private cachedIp = $state<IpInfo | null>(null);

	private inner = $state<FileToolsDInner>({
		type: "auto",
	});

	public save() {
		localStorage.setItem("filetoolsdInstance", JSON.stringify(this.inner));
	}

	public load() {
		const ls = localStorage.getItem("filetoolsdInstance");

		// if custom filetoolsd url and no saved setting, default to the custom url
		if (!ls) {
			const isCustomUrl =
				PUB_FILETOOLSD_URL && PUB_FILETOOLSD_URL !== "https://filetoolsd.filetools.app";
			if (isCustomUrl) {
				this.inner = { type: "custom" };
				return;
			}
		}

		if (!ls) return;
		const inner: FileToolsDInner = JSON.parse(ls);
		this.inner = {
			...this.inner,
			...inner,
		};
	}

	public innerData() {
		return this.inner;
	}

	public set(inner: FileToolsDInner) {
		this.inner = inner;
		this.save();
	}

	public async url() {
		const reachable = async (url: string) => {
			try {
				const res = await fetch(url + "/api/version", {
					method: "GET",
					cache: "no-store",
				});
				return res.ok;
			} catch {
				return false;
			}
		};

		switch (this.inner.type) {
			case "auto": {
				if (!this.cachedIp) this.cachedIp = await ip();
				const ipInfo = this.cachedIp;
				const primary = this.geographicallyOptimalInstance(ipInfo);

				// try primary (closest) first
				if (await reachable(primary)) return primary;

				// fall back to other locations
				for (const location of LOCATIONS) {
					if (location.url === primary) continue;
					if (await reachable(location.url)) return location.url;
				}

				// if none are reachable, fall back to custom
				return Settings.instance.settings.filetoolsdURL;
			}

			case "eu": {
				return "https://eu.filetoolsd.filetools.app";
			}

			case "us": {
				return "https://usa.filetoolsd.filetools.app";
			}

			case "custom": {
				return Settings.instance.settings.filetoolsdURL;
			}
		}
	}

	private geographicallyOptimalInstance(ip: IpInfo) {
		let bestLocation = LOCATIONS[0];
		let bestDistance = haversine(
			ip.latitude,
			ip.longitude,
			bestLocation.latitude,
			bestLocation.longitude,
		);

		for (let i = 1; i < LOCATIONS.length; i++) {
			const location = LOCATIONS[i];
			const distance = haversine(
				ip.latitude,
				ip.longitude,
				location.latitude,
				location.longitude,
			);
			if (distance < bestDistance) {
				bestDistance = distance;
				bestLocation = location;
			}
		}

		return bestLocation.url;
	}
}
