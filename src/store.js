import {
    writable
} from 'svelte/store';
const storageName = "BellWizardSchedules";

function loadSchedules() {
    let s = localStorage.getItem(storageName);
    if (s == null) {
        return new Map();
    }
    return jsonToMap(s);
}

export const sched = writable(loadSchedules());