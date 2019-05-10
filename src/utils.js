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