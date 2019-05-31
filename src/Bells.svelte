<script>
  import { afterUpdate } from "svelte";
  import { bellsToTickers } from "./util.js";
  import { tickers, startTickers } from "./store.js";
  import Bell from "./Bell.svelte";
  // Bells loaded from selected Schedule:
  export let bells;
  // App -> Schedules -> Schedule -> Bells -> Bell

  var selectedTicker;
  afterUpdate(() => {
    startTickers(bellsToTickers(bells));
    if ($tickers.length > 0) {
      selectedTicker = $tickers[0];
    }
  });
  var clockMode = true;
</script>

{#if selectedTicker}
  <Bell {selectedTicker} />
{/if}

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
