import { PUB_DISABLE_ALL_EXTERNAL_REQUESTS, PUB_ENV } from "$env/static/public";

export const GITHUB_URL_FILETOOLS = "https://github.com/thepriyanshumishra/FileTools2.0";
export const GITHUB_URL_FILETOOLSD = "https://github.com/thepriyanshumishra/FileTools2.0"; // Assuming same repo for now
export const GITHUB_API_URL = "https://api.github.com/repos/thepriyanshumishra/FileTools2.0";
export const DISCORD_URL = "https://discord.gg/kqevGxYPak";
export const FILETOOLS_NAME =
	PUB_ENV === "development"
		? "FileTools Local"
		: PUB_ENV === "nightly"
			? "FileTools Nightly"
			: "FileTools.app";
export const CONTACT_EMAIL = "hello@filetools.app";

// i'm not entirely sure this should be in consts.ts, but it is technically a constant as .env is static for FileTools
export const DISABLE_ALL_EXTERNAL_REQUESTS =
	PUB_DISABLE_ALL_EXTERNAL_REQUESTS === "true";

export const GB = 1024 * 1024 * 1024;
