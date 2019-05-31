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
    bs.sort(function (a, b) {
        return a.time - b.time;
    })
    return bs;
}

export function formatCountdown(distance) {
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${hours}:${minutes}:${seconds}`;
}