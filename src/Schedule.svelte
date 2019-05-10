<script>
export let selectedSchedule;
</script>

<h3>Schedule</h3>
{#each selectedSchedule as {title, time}}
  <li>{title} {time}</li>
{/each}