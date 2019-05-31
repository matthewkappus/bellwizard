<script>
  import Schedules from "./Schedules.svelte";
  import { getSavedSchedules } from "./store.js"
  // TODO: onMount () => loadSavedSchedules  and QueryTime 

  // Data flow:
  // App -> Schedules -> Schedule -> Bells -> Bell

  let savedSchedules = getSavedSchedules()
</script>

<!-- TODO: Navigation > Schedules / Edit Schedules  -->
<Schedules {savedSchedules} />
