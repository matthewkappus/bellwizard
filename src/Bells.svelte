<script>
  import { onMount } from "svelte";
  import { bellsToTickers } from "./util.js";
  import Bell from "./Bell.svelte";
  // Bells loaded from selected Schedule:
  export let bells;
  var tickers = [];
  // App -> Schedules -> Schedule -> Bells -> Bell
  onMount(() => startTickers(bells));

  function startTickers(bells) {
    if (bells.length == 0) {
      console.log("no bells to startTickers");
      return;
    }

    // returns {name, time, countdown}
    var ts = bellsToTickers(bells);
    const interval = setInterval(() => {
      const now = new Date();

      ts.forEach(t => {
        console.log(`${t.time} - ${now}`);
        t.countdown = new Date(t.time - now);
      });
      tickers = ts;
    }, 1000);

    return function stop() {
      clearInterval(interval);
    };
  }
</script>

<ul>
  {#each tickers as t}
    <li>
      <h4>{t.name}</h4>
       {t.time} {t.countdown}
    </li>
  {/each}
</ul>
