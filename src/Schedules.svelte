<script>
  import { saveSchedules } from "./store.js";
  import Schedule from "./Schedule.svelte";
  let selected = {};
  export let savedSchedules = [];
</script>

<style>
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
</style>

{#if selected.title}
  <Schedule {selected} />
{/if}

<div class="dropdown">
  <h3>Schedules</h3>
  <div class="dropdown-content">
    {#each savedSchedules as s}
      <div>
        <div on:click={() => (selected = s)}>{s.title}</div>
      </div>
    {/each}
  </div>
</div>
