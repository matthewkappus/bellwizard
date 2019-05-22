<script>
  import { setBells } from "./utils.js";
  export let selectedBells;
</script>

{#await setBells(selectedBells)}
  <p>...Loading Schedule</p>
{:then bells}
  {#each bells as { title, time }}
    <div>{title} {time.toLocaleTimeString()}</div>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
