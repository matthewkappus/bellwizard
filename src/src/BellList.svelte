<script>
  import { time } from "./store.js";

  export let bells = [];

  function setNextBell() {}
</script>

<h4>Bell List:</h4>
{#each bells as b}
  // todo: make bell time clickable to countdown: set style to warning color
  <p>{b.name}: {b.time}</p>
{/each}
