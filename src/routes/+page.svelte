<script lang="ts">
    import Card from "../components/Card.svelte";
	import { filter, searchAuthor } from "../store";
	import Filterer from "../components/Filterer.svelte";
	import { projects } from "$lib/data/projects";
    let searchTerm = "";
</script>

<p class="text-3xl font-bold mb-4">Search</p>
<input class="w-full h-10 rounded-md max-w-5xl p-4 mb-8" bind:value={searchTerm} />

<p class="text-xl font-semibold">or filter by tags</p> 
<Filterer />

{#if $searchAuthor}
    <div class="text-xl relative">Tools by: 
        <button on:click={() => searchAuthor.set("")} class="ml-5 font-bold p-3 bg-tertiary text-label rounded-xl">
            <p>
                <span class="text-red-500">X</span>
                <span>{$searchAuthor}</span>
            </p>
        </button>
    </div>
{/if}

<div class="max-w-5xl flex flex-wrap justify-center gap-4 my-8">
    {#each projects.filter(project => {
        if ($filter !== "All") {
            return project.keywords.includes($filter)
        } else {
            return project
        }
    }).filter(project => {
        if (searchTerm) {
            return project.description.toLowerCase().includes(searchTerm.toLowerCase()) || project.name.toLowerCase().includes(searchTerm.toLowerCase()) || project.author.toLowerCase().includes(searchTerm.toLowerCase())
        } else {
            return project
        }
    }).filter(project => {
        if ($searchAuthor) {
            return project.author === $searchAuthor
        } else {
            return project
        }
    }) as project}
        <Card name={project.name} author={project.author} url={project.url} keywords={project.keywords} description={project.description} />
    {/each}
</div>