<script>
  import Bell from "./Bell.svelte";
  export let bells;

  function formatBells(bs) {
    return bs;
  }
</script>

<ul>
  {#each formatBells(bells) as b}
    <li>{b.name}</li>
  {/each}
</ul>
