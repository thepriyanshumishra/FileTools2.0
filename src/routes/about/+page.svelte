<script lang="ts">
	import { error } from "$lib/util/logger";
	import * as About from "$lib/sections/about";
	import { InfoIcon } from "lucide-svelte";
	import avatarPriyanshu from "$lib/assets/avatars/priyanshu.png";
	import { PUB_DONATION_URL, PUB_STRIPE_KEY } from "$env/static/public";
	import { DISABLE_ALL_EXTERNAL_REQUESTS } from "$lib/util/consts";
	import { m } from "$lib/paraglide/messages";
	// import { dev } from "$app/environment";
	// import { page } from "$app/state";

	/* interface Donator {
		name: string;
		amount?: string | number;
		avatar: string;
	} */

	interface Contributor {
		name: string;
		github: string;
		avatar: string;
		role?: string;
	}

	// const donors: Donator[] = [];

	const mainContribs: Contributor[] = [
		{
			name: "Priyanshu",
			github: "https://github.com/thepriyanshumishra",
			role: m["about.credits.roles.lead_developer"](),
			avatar: avatarPriyanshu,
		},
	];
</script>

<div class="flex flex-col h-full items-center">
	<h1 class="hidden md:block text-[40px] tracking-tight leading-[72px] mb-6">
		<InfoIcon size="40" class="inline-block -mt-2 mr-2" />
		{m["about.title"]()}
	</h1>

	<div
		class="w-full max-w-[1280px] flex flex-col md:flex-row gap-4 p-4 md:px-4 md:py-0"
	>
		<!-- Why FileTools? -->
		<div class="flex flex-col gap-4 flex-1">
			<About.Why />
		</div>

		<!-- Resources & Credits -->
		<div class="flex flex-col gap-4 flex-1">
			<About.Resources />
			<About.Credits
				{mainContribs}
				notableContribs={[]}
				ghContribs={[]}
			/>
		</div>
	</div>
</div>
