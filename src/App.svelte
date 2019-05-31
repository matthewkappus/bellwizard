<script>
  import Schedules from "./Schedules.svelte";
  import { getSavedSchedules } from "./store.js"


  let savedSchedules = getSavedSchedules()
</script>

<!-- TODO: Navigation > Schedules / Edit Schedules  -->
<Schedules {savedSchedules} />
