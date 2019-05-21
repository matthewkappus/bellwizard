<script>
  import Bells from "./Bells.svelte";
  import Schedule from "./Schedule.svelte";
  let d = new Date("March 13, 08 04");
  d.setHours(3);

  let selectedBells = [
    { title: "bell 1", time: d },
    { title: "bell 2", time: d }
  ];
</script>

<!-- todo: show schedules as dropdown -->
<Schedule {selectedBells} />
