// export const time = readable(new Date(), function start(set) {
//     const interval = setInterval(() => {
//         set(new Date());
//     }, 1000);

//     return function stop() {
//         clearInterval(interval);
//     };
// });


export function bellsToTickers(bells) {
    let bs = [];
    bells.sort(function (a, b) {
        return a - b;
    });
    bells.forEach(b => {
        // sort, time select
        var t = new Date(b.time);
        bs.push({
            name: b.name,
            time: t.toLocaleTimeString(),
            countdown: new Date(),
        });
    });
    return bs;
}