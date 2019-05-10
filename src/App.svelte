<script>
  import Bells from "./Bells.svelte";

  let d = new Date("March 13, 08 04");
  d.setHours(3);
</script>

<Bells selectedBells={[{ title: 'bell 1', time: d }, { title: 'bell 2', time: d }]} />
