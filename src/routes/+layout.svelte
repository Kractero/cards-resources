<script>
    import "../app.css";
</script>

<h1 class="text-5xl font-bold tracking-tighter my-8">
    Resources for Cards
</h1>

<div class=" my-8 max-w-5xl flex flex-col items-center">
    <div class="flex gap-8 items-start">
        <img src="https://ucarecdn.com/33fd1d67-9066-4c50-bce9-6acdd1ab493a/banner.webp" alt="hero banner"/>
        <div class="flex flex-col">
            <p class="text-4xl text-left font-semibold tracking-tight">Want to get into advanced NationStates Trading Cards?</p>
            <p class="text-textcontent mt-4 text-sm">
                Trading card players and community members have created scripts and utilities to help players automate or 
                improve their trading card game experience. However, these can be hard to find as they can be hidden in github 
                repositories, various regional dispatches, discord pins, or forum posts. This aims to collect them in one central 
                location.
            </p>
            <div class="flex-1 items-center gap-2 mt-8">
                <a href="/" class="p-4 bg-herobuttons hover:bg-herobuttonshover text-primary font-semibold rounded-xl">
                    Home
                </a>
                <a href="/guides/prereqs" class="p-4 bg-herobuttons hover:bg-herobuttonshover text-primary font-semibold rounded-xl">
                    Prerequisites
                </a>
                <a href="/guides" class="p-4 bg-herobuttons hover:bg-herobuttonshover text-primary font-semibold rounded-xl">
                    Guides
                </a>
                <a href="/disclaimer" class="p-4 bg-herobuttons hover:bg-herobuttonshover text-primary font-semibold rounded-xl">
                    Disclaimer
                </a>
            </div>
        </div>
    </div>
</div>
<slot />