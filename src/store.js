import {
    writable,
    readable
} from 'svelte/store';


var t = new Date();

export const savedSchedules = [{
        title: "Schedule 0",
        bells: [{
                name: "Opening Bell",
                time: t.setHours(8)
            },
            {
                name: "Lunch Time",
                time: t.setHours(11)
            },
            {
                name: "Closing Bell",
                time: t.setHours(15)
            },
        ]
    },
    {
        title: "Schedule 1",
        bells: [{
                name: "Opening Bell",
                time: t.setHours(8)
            },
            {
                name: "Lunch Time",
                time: t.setHours(11)
            },
            {
                name: "Closing Bell",
                time: t.setHours(15)
            },
        ]
    },
    {
        title: "Schedule 2",
        bells: [{
                name: "Opening Bell",
                time: t.setHours(8)
            },
            {
                name: "Lunch Time",
                time: t.setHours(11)
            },
            {
                name: "Closing Bell",
                time: t.setHours(15)
            },
        ]
    }
]
export const selectedSchedule = writable({});

export const time = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});