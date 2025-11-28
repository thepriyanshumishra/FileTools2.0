<script lang="ts">
	import Panel from "$lib/components/visual/Panel.svelte";
	import { GITHUB_URL_FILETOOLSD } from "$lib/util/consts";
	import { ServerIcon } from "lucide-svelte";
	import type { ISettings } from "./index.svelte";
	import clsx from "clsx";
	import Dropdown from "$lib/components/functional/Dropdown.svelte";
	import { filetoolsdLoaded } from "$lib/store/index.svelte";
	import { m } from "$lib/paraglide/messages";
	import { link, sanitize } from "$lib/store/index.svelte";
	import { FileToolsDInstance, type FileToolsDInner } from "./filetoolsdSettings.svelte";

	let filetoolsdCommit = $state<string | null>(null);
	let abortController: AbortController | null = null;

	const { settings = $bindable() }: { settings: ISettings } = $props();

	$effect(() => {
		if (abortController) abortController.abort();
		abortController = new AbortController();
		const { signal } = abortController;

		filetoolsdCommit = "loading";
		FileToolsDInstance.instance
			.url()
			.then((u) => fetch(`${u}/api/version`, { signal }))
			.then((res) => {
				if (!res.ok) throw new Error("bad response");
				filetoolsdLoaded.set(false);
				return res.json();
			})
			.then((data) => {
				filetoolsdCommit = data.data;
				filetoolsdLoaded.set(true);
			})
			.catch((err) => {
				if (err.name !== "AbortError") {
					filetoolsdCommit = null;
					filetoolsdLoaded.set(false);
				}
			});

		return () => {
			if (abortController) abortController.abort();
		};
	});
</script>

<Panel class="flex flex-col gap-8 p-6">
	<div class="flex flex-col gap-3">
		<h2 class="text-2xl font-bold">
			<ServerIcon
				size="40"
				class="inline-block -mt-1 mr-2 bg-accent-red p-2 rounded-full overflow-visible"
				color="black"
			/>
			{m["settings.filetoolsd.title"]()}
		</h2>
		<p
			class={clsx("text-sm font-normal", {
				"text-failure": filetoolsdCommit === null,
				"text-green-700 dynadark:text-green-300": filetoolsdCommit !== null,
				"!text-muted": filetoolsdCommit === "loading",
			})}
		>
			{m["settings.filetoolsd.status"]()}
			{filetoolsdCommit
				? filetoolsdCommit === "loading"
					? m["settings.filetoolsd.loading"]()
					: m["settings.filetoolsd.available"]({ commitId: filetoolsdCommit })
				: m["settings.filetoolsd.unavailable"]()}
		</p>
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-4">
				<p class="text-sm text-muted font-normal">
					{@html sanitize(m["settings.filetoolsd.description"]())}
				</p>
				<p class="text-sm text-muted font-normal">
					{@html sanitize(link(
						"vertd_link",
						m["settings.filetoolsd.hosting_info"](),
						GITHUB_URL_FILETOOLSD,
					))}
				</p>
				<div class="flex flex-col gap-2">
					<p class="text-base font-bold">
						{m["settings.filetoolsd.instance"]()}
					</p>
					<Dropdown
						options={[
							m["settings.filetoolsd.auto_instance"](),
							m["settings.filetoolsd.eu_instance"](),
							m["settings.filetoolsd.us_instance"](),
							m["settings.filetoolsd.custom_instance"](),
						]}
						onselect={(selected) => {
							let inner: FileToolsDInner;
							switch (selected) {
								case m["settings.filetoolsd.auto_instance"]():
									inner = { type: "auto" };
									break;
								case m["settings.filetoolsd.eu_instance"]():
									inner = { type: "eu" };
									break;
								case m["settings.filetoolsd.us_instance"]():
									inner = { type: "us" };
									break;
								case m["settings.filetoolsd.custom_instance"]():
									inner = {
										type: "custom",
									};
									break;
								default:
									inner = { type: "auto" };
							}
							FileToolsDInstance.instance.set(inner);
						}}
						selected={(() => {
							switch (FileToolsDInstance.instance.innerData().type) {
								case "auto":
									return m["settings.filetoolsd.auto_instance"]();
								case "eu":
									return m["settings.filetoolsd.eu_instance"]();
								case "us":
									return m["settings.filetoolsd.us_instance"]();
								case "custom":
									return m[
										"settings.filetoolsd.custom_instance"
									]();
							}
						})()}
						settingsStyle
					/>
					{#if FileToolsDInstance.instance.innerData().type === "custom"}
						<input
							type="text"
							placeholder={m["settings.filetoolsd.url_placeholder"]()}
							bind:value={settings.filetoolsdURL}
						/>
					{/if}
				</div>
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<p class="text-base font-bold">
							{m["settings.filetoolsd.conversion_speed"]()}
						</p>
						<p class="text-sm text-muted font-normal">
							{m["settings.filetoolsd.speed_description"]()}
						</p>
					</div>
					<Dropdown
						options={[
							m["settings.filetoolsd.speeds.very_slow"](),
							m["settings.filetoolsd.speeds.slower"](),
							m["settings.filetoolsd.speeds.slow"](),
							m["settings.filetoolsd.speeds.medium"](),
							m["settings.filetoolsd.speeds.fast"](),
							m["settings.filetoolsd.speeds.ultra_fast"](),
						]}
						settingsStyle
						selected={(() => {
							switch (settings.filetoolsdSpeed) {
								case "verySlow":
									return m[
										"settings.filetoolsd.speeds.very_slow"
									]();
								case "slower":
									return m["settings.filetoolsd.speeds.slower"]();
								case "slow":
									return m["settings.filetoolsd.speeds.slow"]();
								case "medium":
									return m["settings.filetoolsd.speeds.medium"]();
								case "fast":
									return m["settings.filetoolsd.speeds.fast"]();
								case "ultraFast":
									return m[
										"settings.filetoolsd.speeds.ultra_fast"
									]();
							}
						})()}
						onselect={(selected) => {
							switch (selected) {
								case m["settings.filetoolsd.speeds.very_slow"]():
									settings.filetoolsdSpeed = "verySlow";
									break;
								case m["settings.filetoolsd.speeds.slower"]():
									settings.filetoolsdSpeed = "slower";
									break;
								case m["settings.filetoolsd.speeds.slow"]():
									settings.filetoolsdSpeed = "slow";
									break;
								case m["settings.filetoolsd.speeds.medium"]():
									settings.filetoolsdSpeed = "medium";
									break;
								case m["settings.filetoolsd.speeds.fast"]():
									settings.filetoolsdSpeed = "fast";
									break;
								case m["settings.filetoolsd.speeds.ultra_fast"]():
									settings.filetoolsdSpeed = "ultraFast";
									break;
							}
						}}
					/>
				</div>
			</div>
		</div>
	</div>
</Panel>
