import {
    writable,
    readable
} from 'svelte/store';

import {
    bellsToTickers
} from './util.js'

var t = new Date();


// parses [{ title, bells: [name, time]}] from localStorage key "BellWizardSchedules"
export function getSavedSchedules() {
    let scheds = localStorage.getItem("BellWizardSchedules")
    if (scheds == null || scheds == "") {
        console.error("No BellWizardSchedules in local storage");
        return
    }

    var s = JSON.parse(scheds);
    // if (!validSchedules(s)) {
    //     console.error(" BellWizardSchedules in local storage is invalid:\n" + scheds);
    //     return
    // }
    return s
}

// takes [{ title, bells: [name, time]}] and stores as json-encoded string in localStorage
// under key "BellWizardSchedules"
export function saveSchedules(schedules) {
    // if (!validSchedules(schedules)) {
    //     console.error("Invalid Schedules: Did not save:\n " + JSON.stringify(schedules))
    // }
    localStorage.setItem("BellWizardSchedules", JSON.stringify(schedules))
    console.log("BellWizardSchedules saved: \n" + localStorage.getItem("BellWizardSchedules"))
}

function validSchedules(s) {
    const props = Object.getOwnPropertyNames(s);
    return (props.includes("title") && props.includes("bells"))
}

// export const savedSchedules = [{
//         title: "Schedule 0",
//         bells: [{
//                 name: "Clog Toilet",
//                 time: t.setHours(7)
//             },
//             {
//                 name: "Lunch Time",
//                 time: t.setHours(11)
//             },
//             {
//                 name: "Closing Bell",
//                 time: t.setHours(15)
//             },
//         ]
//     },
//     {
//         title: "Schedule 1",
//         bells: [{
//                 name: "Opening Bell",
//                 time: t.setHours(8)
//             },
//             {
//                 name: "Lunch Time",
//                 time: t.setHours(11)
//             },
//             {
//                 name: "Closing Bell",
//                 time: t.setHours(15)
//             },
//         ]
//     },
//     {
//         title: "Schedule 2",
//         bells: [{
//                 name: "Opening Bell",
//                 time: t.setHours(8)
//             },
//             {
//                 name: "Lunch Time",
//                 time: t.setHours(11)
//             },
//             {
//                 name: "Closing Bell",
//                 time: t.setHours(15)
//             },
//         ]
//     }
// ]
export const selectedSchedule = writable({});

export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

export let tickers;

export function startTickers(bells) {
    var ts = bellsToTickers(bells);
    tickers = readable(ts,
        function start(set) {
            const interval = setInterval(() => {
                const now = new Date();
                ts.forEach(t => {
                    t.countdown = t.time - now;
                })
                set(ts);
            }, 1000)

            let ts = bellsToTickers(bells);
            return function stop() {
                clearInterval(interval);
            };
        });
}

// export const tickers = readable([],
//     function start(set) {
//         const interval = setInterval(() => {
//             const now = new Date();
//             ts.forEach(t => {
//                 t.countdown = t.time - now;
//             })
//             set(ts);
//         }, 1000)

//         let ts = bellsToTickers(bells);
//         return function stop() {
//             clearInterval(interval);
//         };
//     });