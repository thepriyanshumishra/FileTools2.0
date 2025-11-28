<script lang="ts">
	import { onMount } from "svelte";
	import { goto, beforeNavigate, afterNavigate } from "$app/navigation";

	import { PUB_PLAUSIBLE_URL, PUB_HOSTNAME } from "$env/static/public";
	import {
		DISABLE_ALL_EXTERNAL_REQUESTS,
		FILETOOLS_NAME,
	} from "$lib/util/consts.js";
	import * as Layout from "$lib/components/layout";
	import * as Navbar from "$lib/components/layout/Navbar";
	import featuredImage from "$lib/assets/FileTools_Feature.webp";
	import { Settings } from "$lib/sections/settings/index.svelte";
	import {
		files,
		isMobile,
		effects,
		theme,
		dropping,
		filetoolsdLoaded,
		locale,
		updateLocale,
	} from "$lib/store/index.svelte";
	import "$lib/css/app.scss";
	import { browser } from "$app/environment";
	import { initStores as initAnimStores } from "$lib/util/animation.js";
	import { FileToolsDInstance } from "$lib/sections/settings/filetoolsdSettings.svelte.js";

	let { children, data } = $props();
	let enablePlausible = $state(false);

	let scrollPositions = new Map<string, number>();

	beforeNavigate((nav) => {
		if (!nav.from || !$isMobile) return;
		scrollPositions.set(nav.from.url.pathname, window.scrollY);
	});

	afterNavigate((nav) => {
		if (!$isMobile) return;
		const scrollY = nav.to
			? scrollPositions.get(nav.to.url.pathname) || 0
			: 0;
		window.scrollTo(0, scrollY);
	});

	const dropFiles = (e: DragEvent) => {
		e.preventDefault();
		dropping.set(false);
		const oldLength = files.files.length;
		files.add(e.dataTransfer?.files);
		if (oldLength !== files.files.length) goto("/convert");
	};

	const handleDrag = (e: DragEvent, drag: boolean) => {
		e.preventDefault();
		dropping.set(drag);
	};

	const handlePaste = (e: ClipboardEvent) => {
		const clipboardData = e.clipboardData;
		if (!clipboardData || !clipboardData.files.length) return;
		e.preventDefault();
		const oldLength = files.files.length;
		files.add(clipboardData.files);
		if (oldLength !== files.files.length) goto("/convert");
	};

	onMount(() => {
		initAnimStores();

		const handleResize = () => {
			isMobile.set(window.innerWidth <= 768);
		};

		isMobile.set(window.innerWidth <= 768); // initial page load
		window.addEventListener("resize", handleResize); // handle window resize
		window.addEventListener("paste", handlePaste);

		effects.set(localStorage.getItem("effects") !== "false"); // defaults to true if not set
		theme.set(
			(localStorage.getItem("theme") as "light" | "dark") || "light",
		);
		const storedLocale = localStorage.getItem("locale");
		if (storedLocale) updateLocale(storedLocale);

		Settings.instance.load();

		if (!DISABLE_ALL_EXTERNAL_REQUESTS) {
			FileToolsDInstance.instance
				.url()
				.then((u) => fetch(`${u}/api/version`))
				.then((res) => {
					if (res.ok) $filetoolsdLoaded = true;
				});
		}

		return () => {
			window.removeEventListener("paste", handlePaste);
			window.removeEventListener("resize", handleResize);
		};
	});

	$effect(() => {
		enablePlausible =
			!!PUB_PLAUSIBLE_URL &&
			Settings.instance.settings.plausible &&
			!DISABLE_ALL_EXTERNAL_REQUESTS;
		if (!enablePlausible && browser) {
			// reset pushState on opt-out so that plausible stops firing events on page navigation
			history.pushState = History.prototype.pushState;
		}
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link
		rel="preconnect"
		href="https://fonts.gstatic.com"
		crossorigin="anonymous"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
		rel="stylesheet"
	/>

	<title>{FILETOOLS_NAME}</title>
	<meta name="theme-color" content="#F2ABEE" />
	<meta
		name="title"
		content="{FILETOOLS_NAME} — Free, fast, and awesome file converter"
	/>
	<meta
		name="description"
		content="With FileTools, you can quickly convert any image, video, audio, and document file. No ads, no tracking, open source, and all processing (other than video) is done on your device."
	/>
	<meta property="og:url" content="https://filetools.app" />
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="{FILETOOLS_NAME} — Free, fast, and awesome file converter"
	/>
	<meta
		property="og:description"
		content="With FileTools, you can quickly convert any image, video, audio, and document file. No ads, no tracking, open source, and all processing (other than video) is done on your device."
	/>
	<meta property="og:image" content={featuredImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="filetools.app" />
	<meta property="twitter:url" content="https://filetools.app" />
	<meta
		property="twitter:title"
		content="{FILETOOLS_NAME} — Free, fast, and awesome file converter"
	/>
	<meta
		property="twitter:description"
		content="With FileTools, you can quickly convert any image, video, audio, and document file. No ads, no tracking, open source, and all processing (other than video) is done on your device."
	/>
	<meta property="twitter:image" content={featuredImage} />
	<link rel="manifest" href="/manifest.json" />
	<link rel="canonical" href="https://filetools.app/" />
	{#if enablePlausible}
		<script
			defer
			data-domain={PUB_HOSTNAME || "filetools.app"}
			src="{PUB_PLAUSIBLE_URL}/js/script.js"
		></script>
	{/if}
	{#if data.isAprilFools}
		<style>
			* {
				font-family: "Comic Sans MS", "Comic Sans", cursive !important;
			}
		</style>
	{/if}
</svelte:head>

<!-- FIXME: if user resizes between desktop/mobile, highlight of page disappears (only shows on original size) -->
{#key $locale}
	<div
		class="flex flex-col min-h-screen h-full w-full overflow-x-hidden"
		ondrop={dropFiles}
		ondragenter={(e) => handleDrag(e, true)}
		ondragover={(e) => handleDrag(e, true)}
		ondragleave={(e) => handleDrag(e, false)}
		role="region"
	>
		<Layout.UploadRegion />

		<div>
			<Layout.MobileLogo />
			<Navbar.Desktop />
		</div>

		<!-- 
		SvelteKit throws the following warning when developing - safe to ignore as we render the children in this component:
		`<slot />` or `{@render ...}` tag missing — inner content will not be rendered
		-->
		<Layout.PageContent {children} />

		<Layout.Toasts />
		<Layout.Dialogs />

		<div>
			<Layout.Footer />
			<Navbar.Mobile />
		</div>
	</div>
{/key}

<!-- Gradients placed here to prevent it overlapping in transitions -->
<Layout.Gradients />
