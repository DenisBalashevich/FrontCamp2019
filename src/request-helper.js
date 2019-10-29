export async function get(url) {
    let response = await fetch(url);

    if (response.ok) {
        let json = await response.json();
        return json;
    } else {
        alert("HTTP Error: " + response.status);
    }
}