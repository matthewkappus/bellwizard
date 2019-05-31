import {
    writable,
    readable
} from 'svelte/store';

var t = new Date();


// parses [{ title, bells: [name, time]}] from localStorage key "BellWizardSchedules"
export function getSavedSchedules() {
    let scheds = localStorage.getItem("BellWizardSchedules")
    if (scheds == null || scheds == "") {
        console.error("No BellWizardSchedules in local storage");
        return
    }

    var s = JSON.parse(scheds);
    if (!validSchedules(s)) {
        console.error(" BellWizardSchedules in local storage is invalid:\n" + scheds);
        return
    }


    s = updateTime(s)
    saveSchedules(s)
    return s
}

// takes [{ title, bells: [name, time]}] and stores as json-encoded string in localStorage
// under key "BellWizardSchedules"
export function saveSchedules(schedules) {
    if (!validSchedules(schedules)) {
        console.error("Invalid Schedules: Did not save:\n " + JSON.stringify(schedules))
    }
    localStorage.setItem("BellWizardSchedules", JSON.stringify(schedules))
}

function validSchedules(s) {
    const props = Object.getOwnPropertyNames(s[0]);
    return (props.includes("title") && props.includes("bells"))
}


function updateTime(schedules) {
    for (var i = 0; i < schedules.length; i++) {
        var bells = schedules[i].bells;
        var newBells = [];
        bells.forEach(b => {
            var n = new Date();
            var t = new Date(b.time);
            while (t < n) {
                t.setHours(t.getHours() + 24)
            };
            b.time = t;
            newBells.push(b)
        })
        schedules[i].bells = newBells;
    }
    return schedules;
}