<script>
    import Card from "../components/Card.svelte";
    const projects = [
        {
            "name": "gotIssues",
            "author": "9003",
            "url": "https://github.com/jmikk/gotIssues",
            "keyword": ["gotIssues", "github", "python", "script", "issues"],
            "description": `gotIssues is a command line tool that generates an HTML sheet containing links to all current issues and packs for your nation. Once it is setup, you just run two scripts, then press enter to your heart's content,  answering issues and opening packs along the way.`
        },
        {
            "name": "RCES Issues Scripts",
            "author": "Racoda",
            "url": "https://github.com/dithpri/RCES#issue-scripts",
            "keyword": ["RCES", "github", "userscript", "issues"],
            "description": `The issue answering scripts from RCES is a powerful alternative to gotIssues. These allow you to get started answering issues immediately without waiting for an html sheet to be generated. These scripts are just Tampermonkey scripts, they do not require Python to use, and can be used with any other solution for puppet management.`
        },
        {
            "name": "nslogin-web",
            "author": "Auralia",
            "url": "https://auralia.github.io/nslogin-web/build/",
            "keyword": ["website", "login"],
            "description": `Automatically login to all your puppets with this tool. Just input them in, and all your puppets will be saved from impending apocalypse.`
        },
    ]
</script>

<h1 class="text-5xl font-bold tracking-tighter text-white my-8">
    Resources for Cards
</h1>

<div class="grid grid-cols-3 gap-4">
{#each projects as project}
    <Card name={project.name} author={project.author} url={project.url} keyword={project.keyword} description={project.description} />
{/each}
</div>