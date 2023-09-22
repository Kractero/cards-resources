<script lang="ts">
    import type { PageData } from './$types';
    import { base } from "$app/paths";
    export let data: PageData;
</script>

<h2 class="text-textprimary text-3xl font-bold mb-1">Guides</h2>

<p class="text-lg mb-16">Various guides for setting up tools and prerequisites.</p>

<div class="flex flex-wrap gap-4 max-w-5xl">
    {#each data.posts as post}
        <a href={`${base}/guides/${post.url}`} rel="noopener noreferrer" target="_blank">
            <div class="text-center bg-content rounded-xl p-4">
                <h3 class="text-cardprimarytext text-2xl font-semibold mb-1">{post.title}</h3>
                <p class="text-cardsecondarytext text-xs mb-2">{post.author}</p>
                <p class="text-cardsecondarytext text-sm">{post.description}</p>
            </div>
        </a>
    {/each}
</div>