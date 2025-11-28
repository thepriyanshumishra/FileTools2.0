import { PUB_FILETOOLSD_URL } from "$env/static/public";
import type { ConversionBitrate } from "$lib/converters/ffmpeg.svelte";
import type { ConversionSpeed } from "$lib/converters/filetoolsd.svelte";
import { FileToolsDInstance } from "./filetoolsdSettings.svelte";

export { default as Appearance } from "./Appearance.svelte";
export { default as Conversion } from "./Conversion.svelte";
export { default as FileToolsD } from "./Vertd.svelte";
export { default as Privacy } from "./Privacy.svelte";

// TODO: clean up settings & button code (componetize)

export interface DefaultFormats {
	image: string;
	video: string;
	audio: string;
	document: string;
}
export interface ISettings {
	filenameFormat: string;
	defaultFormat: DefaultFormats;
	useDefaultFormat: boolean;
	metadata: boolean;
	plausible: boolean;
	filetoolsdURL: string;
	filetoolsdSpeed: ConversionSpeed; // videos
	magickQuality: number; // images
	ffmpegQuality: ConversionBitrate; // audio (or audio <-> video)
	ffmpegSampleRate: string; // audio (or audio <-> video)
	ffmpegCustomSampleRate: number; // audio (or audio <-> video) - only used when ffmpegSampleRate is "custom"
	filetoolsdBlockedHashes: Map<string, Date[]>; // hashes of files blocked from filetoolsd conversion
}

export class Settings {
	public static instance = new Settings();

	public settings: ISettings = $state({
		filenameFormat: "FileTools_%name%",
		defaultFormat: {
			image: ".png",
			video: ".mp4",
			audio: ".mp3",
			document: ".docx",
		},
		useDefaultFormat: false,
		metadata: true,
		plausible: true,
		filetoolsdURL: PUB_FILETOOLSD_URL,
		filetoolsdSpeed: "slow",
		magickQuality: 100,
		ffmpegQuality: "auto",
		ffmpegSampleRate: "auto",
		ffmpegCustomSampleRate: 44100,
		filetoolsdBlockedHashes: new Map<string, Date[]>(),
	});

	public save() {
		localStorage.setItem("settings", JSON.stringify(this.settings));
		FileToolsDInstance.instance.save();
	}

	public load() {
		FileToolsDInstance.instance.load();
		const ls = localStorage.getItem("settings");
		if (!ls) return;
		const settings: ISettings = JSON.parse(ls);
		const filetoolsdBlockedHashes = new Map<string, Date[]>(
			Object.entries(
				settings.filetoolsdBlockedHashes || this.settings.filetoolsdBlockedHashes,
			),
		);

		settings.filetoolsdBlockedHashes = filetoolsdBlockedHashes;

		this.settings = {
			...this.settings,
			...settings,
		};
	}
}
