<script>
  import { afterUpdate } from "svelte";
  import { bellsToTickers } from "./util.js";
  import { tickers, startTickers } from "./store.js";
  import Bell from "./Bell.svelte";
  // Bells loaded from selected Schedule:
  export let bells;
  // App -> Schedules -> Schedule -> Bells -> Bell
  afterUpdate(() => {

    startTickers(bellsToTickers(bells));
  });


  var clockMode = true;
</script>

<ul>
  {#each $tickers as t}
    <li>
       {t.name}
      <span on:click={() => (clockMode = !clockMode)}>
        {#if clockMode}{t.time.toLocaleTimeString()}{:else}{t.countdown}{/if}
      </span>

    </li>
  {/each}
</ul>
