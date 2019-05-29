<script>
  export let selected = {};
  import Bells from "./Bells.svelte";
</script>

<h1> {selected.title} </h1>
<Bells bells={selected.bells} />
