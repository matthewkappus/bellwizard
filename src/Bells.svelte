<script>
  import { setBells } from "./utils.js";
  export let selectedBells = [];
</script>

<!-- 
<h3>Bells</h3>
{#if !selectedBells}
  Select Schedule
{:else}
  <ul>
    {#each selectedBells as b}
      <li>{b.title}</li>
    {/each}
  </ul>
{/if} -->

{#await setBells(selectedBells)}
  <p>...Loading Schedule</p>
{:then bells}
  {#each bells as { title, time }}
    <div>{title}{time}</div>
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
