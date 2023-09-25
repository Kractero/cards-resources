<script>
	import ViewTransition from './navigation.svelte';
    import { base } from "$app/paths";
	import discord from "../assets/discord-mark-blue.png"
	import '../app.css';
</script>

<svelte:head>
  <title>Cards Resources</title>
  <meta name="description" content="List of resources and guides for NationStates trading cards" />
  <link rel="manifest" href="/site.webmanifest">
</svelte:head>

<div>
	<ViewTransition />
	<h1 class="text-5xl font-bold tracking-tighter my-8 text-center lg:text-left">Resources for Cards</h1>

	<div class=" my-8 max-w-5xl flex flex-col items-center">
		<div class="flex flex-col items-center max-w-lg lg:max-w-none lg:flex-row gap-8 lg:items-start">
			<img
				src="https://ucarecdn.com/33fd1d67-9066-4c50-bce9-6acdd1ab493a/banner.webp"
				alt="hero banner"
			/>
			<div class="flex flex-col">
				<p class="text-4xl text-left font-semibold tracking-tight">
					Want to get into advanced NationStates Trading Cards?
				</p>
				<p class="text-textcontent mt-4 text-sm">
					Trading card players and community members have created scripts and utilities to help
					players automate or improve their trading card game experience. However, these can be hard
					to find as they can be hidden in github repositories, various regional dispatches, discord
					pins, or forum posts. This aims to collect them in one central location.
				</p>
				<div class="flex-1 flex items-center flex-wrap gap-2 mt-8">
					<a
						href={`${base}/`}
						class="p-4 bg-herobuttons hover:bg-herobuttonshover text-buttons font-semibold rounded-xl"
					>
						Home
					</a>
					<a
						href={`${base}/guides`}
						class="p-4 bg-herobuttons hover:bg-herobuttonshover text-buttons font-semibold rounded-xl"
					>
						Guides
					</a>
					<a
						href={`${base}/disclaimer`}
						class="p-4 bg-herobuttons hover:bg-herobuttonshover text-buttons font-semibold rounded-xl"
					>
						Disclaimer
					</a>
					<a
						href="https://discord.gg/yn5a4p9"
						rel="noopener noreferrer"
						target="_blank"
						class="p-4 bg-herobuttons hover:bg-herobuttonshover text-buttons font-semibold rounded-xl"
					>
						<img width="28" height="28" src={discord} alt="discord" />
					</a>
				</div>
			</div>
		</div>
	</div>
	<slot />
</div>
