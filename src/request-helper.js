export async function get(url) {
    let response = await fetch(url);

    if (response.ok) {
        let json = await response.json();
        return json;
    } else {
        console.log("HTTP Error: " + response.status);
    }
}