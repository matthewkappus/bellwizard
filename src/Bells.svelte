<script>
  import { afterUpdate } from "svelte";
  import { bellsToTickers } from "./util.js";
  import Bell from "./Bell.svelte";
  // Bells loaded from selected Schedule:
  export let bells;
  let interval;
  var tickers = [];
  // App -> Schedules -> Schedule -> Bells -> Bell
  afterUpdate(() => {
    clearInterval(interval);

    startTickers(bellsToTickers(bells));
  });
  function formatCountdown(distance) {
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${hours}:${minutes}:${seconds}`;
  }

  // startTickers takes bells[{name, time}] adds ticker and sets new ticker every second
  function startTickers(ts) {
    // returns {name, time, countdown}
    interval = setInterval(() => {
      const now = new Date();

      ts.forEach(t => {
        // t.countdown = new Date(t.time - now);
        t.countdown = formatCountdown(t.time.getTime() - new Date().getTime());
      });
      tickers = ts;
    }, 1000);

    return function stop() {
      clearInterval(interval);
    };
  }

  var clockMode = true;
</script>

<ul>
  {#each tickers as t}
    <li>
       {t.name}
      <span on:click={() => (clockMode = !clockMode)}>
        {#if clockMode}{t.time.toLocaleTimeString()}{:else}{t.countdown}{/if}
      </span>

    </li>
  {/each}
</ul>
