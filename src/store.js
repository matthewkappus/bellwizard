import {
    writable
} from 'svelte/store';
import {
    formatCountdown
} from './util.js'

import {
    getRegularSchuedule
} from './madison_bells.js'

export const tickers = writable([]);

// startTickers takes bells[{name, time}] adds ticker and sets new ticker every second
let interval;

export function startTickers(ts) {

    clearInterval(interval);

    // returns {name, time, countdown}
    interval = setInterval(() => {
        ts.forEach(t => {
            // t.countdown = new Date(t.time - now);
            t.countdown = formatCountdown(t.time.getTime() - new Date().getTime());
        });
        tickers.set(ts);
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
}

// parses [{ title, bells: [name, time]}] from localStorage key "BellWizardSchedules"
export function getSavedSchedules() {

    var s = []
    let scheds = localStorage.getItem("BellWizardSchedules")
    if (scheds == null || scheds == "") {
        localStorage.setItem("BellWizardSchedules", "")
    } else {
        s = JSON.parse(scheds);
    }

    s.push(getRegularSchuedule());

    return updateTime(s)
}

// takes [{ title, bells: [name, time]}] and stores as json-encoded string in localStorage
// under key "BellWizardSchedules"
export function saveSchedules(schedules) {

    localStorage.setItem("BellWizardSchedules", JSON.stringify(schedules))
}

function updateTime(schedules) {
    console.log("updating " + schedules);
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