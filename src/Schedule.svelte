<script>
  import { stringToMap } from "./util.js";
  const storageName = "BellWizardSchedules";

  export function saveSchedule(name, bells) {
    let s = localStorage.getItem(storageName);
    if (s === "") {
      console.log("No BellWizardSchedules in localstorage. Creating.");
    }
    let m = jsonToMap(m);
    console.log(m.toString() + "was made");
  }
</script>
