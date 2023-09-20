<script lang="ts">
	import type { keywords } from "../ts/types";

    export let name: string;
    export let author: string;
    export let url: string;
    export let description: string;
    export let keyword: Array<keywords>;
</script>

<a href={url} rel="noopener noreferrer" target="_blank">
    <div class="max-w-xs flex flex-col justify-center items-center bg-gray-50 p-4 rounded-xl gap-4 transition-transform duration-500 hover:shadow-lg hover:scale-105">
        <div class="text-center">
            <h2 class="text-3xl font-bold break-all">{name}</h2>
            <p class="text-sm">{author}</p>
            <div class="flex gap-2 mt-2">
                {#each keyword as word}
                    <p class="text-xs rounded-xl p-2 bg-gray-300">{word}</p>
                {/each}
            </div>
        </div>
        <p>{description}</p>
    </div>
</a>