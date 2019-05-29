<script>
  import { onMount } from "svelte";
  import { startTickers } from "./store.js";
  import Bell from "./Bell.svelte";

  var tickers = [];
  // Bells loaded from selected Schedule:
  // App -> Schedules -> Schedule -> Bells -> Bell
  export let bells;
  onMount(function() {
    // startTickers changes  bells {name: time (int)} -> tickers{name, time (date), countdown}
    tickers = startTickers(bells);
  });
</script>

<ul>
  {#each $tickers as t}{t}{/each}
</ul>
