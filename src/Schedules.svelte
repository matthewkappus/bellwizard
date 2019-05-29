<script>
  import { savedSchedules } from "./store.js";
  import Schedule from "./Schedule.svelte";
  let selected = {};
  function setSchedule(i) {
    // selectedSchedule.update(n => (n = savedSchedules[i]));
    selected = savedSchedules[i];
  }
</script>

{#if selected.title}
  <Schedule {selected} />
{/if}

<select on:change={e => setSchedule(e.target.value)}>
  {#each savedSchedules as s, i}
    <option value={i}>{s.title}</option>
  {/each}
</select>
