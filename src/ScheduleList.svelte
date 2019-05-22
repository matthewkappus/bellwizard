<script>
  import { selectedSchedule, savedSchedules } from "./store.js";

  function setSchedule(i) {
    selectedSchedule.update(n => (n = savedSchedules[i]));
  }
</script>

<form>

  <select on:change={e => setSchedule(e.target.value)}>
    {#each savedSchedules as s, i}
      <option value={i}>{s.title}</option>
    {/each}
  </select>

</form>
