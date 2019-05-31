
export function bellsToTickers(bells) {
    let bs = [];
    bells.sort(function (a, b) {
        return a - b;
    });
    bells.forEach(b => {
        // sort, time select
        bs.push({
            name: b.name,
            time: new Date(b.time),
            countdown: new Date(),
        });
    });
    return bs;
}
