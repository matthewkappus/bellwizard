<script>
  import { jsonToMap } from "./utils.js";
  import { sched } from "./store.js";

  export let selectedBells;
  let schedule;
  const unsubscribe = sched.subscribe(sched => schedule);
</script>

{schedule}
