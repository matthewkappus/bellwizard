<script>
  import BellList from "./BellList.svelte";
  import { selectedSchedule, time } from "./store.js";
</script>

{#if $selectedSchedule.title}
  <h1>{$selectedSchedule.title}</h1>

  <BellList bells={$selectedSchedule.bells} />
{:else}
  <h1>{$time.toLocaleTimeString()}</h1>
{/if}
