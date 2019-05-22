<script>
  import { time } from "./store.js";

  export let bells = [];

  function formatBells() {
    let bs = [];
    bells.sort(function(a, b) {
      return a - b;
    });
    bells.forEach(b => {
      // sort, time select
      var t = new Date(b.time);
      bs.push({ name: b.name, time: t.toLocaleTimeString() });
    });
    return bs;
  }
</script>

<h4>Bell List:</h4>
{#each formatBells(bells) as { name, time }}
  <p>{name}: {time} </p>
{/each}
