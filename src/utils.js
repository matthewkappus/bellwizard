export async function getTime() {
    const res = await fetch("https://nist.time.gov/actualtime.cgi?lzbc=siqm9b");
    let xml = await res.text();

    if (res.ok) {
        xml = formatXMLTime(xml);
        return xml
    } else {
        throw new Error(xml);
    }


}

export async function setBells(bells) {
    if (!Array.isArray(bells)) {
        console.log("setBells needs array, got ", bells)
        return
    }
    let time = await getTime();
    var update = [];
    bells.forEach(b => {
        time.setHours(b.time.getHours());
        time.setMinutes(b.time.getMinutes());
        b.time = time;
        update.push(b)
    })
    return update;
}

function formatXMLTime(xmlDoc) {
    let parser = new DOMParser();
    xmlDoc = parser.parseFromString(xmlDoc, "text/xml");
    let t = xmlDoc.getElementsByTagName('timestamp')[0].getAttribute('time');
    let timestamp = parseInt(t) / 1000
    return new Date(timestamp);
}

export function jsonToMap(j) {
    let o = JSON.parse(j);

    if (!Array.isArray(o)) {
        console.error("Could not parse JSON to array: ", j)
        return
    }

    var schedules = new Map();
    o.forEach(s => {
        schedules.set(s.name, s.bells)
    });
    return schedules;
}

export function mapToJSON(inputMap) {
    let a = [];

    inputMap.forEach(function (value, key) {
        a.push({
            name: key,
            bells: value
        })
    });

    return JSON.stringify(a);
}