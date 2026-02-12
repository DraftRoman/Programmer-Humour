const API_URL = `https://xkcd.now.sh/?comic=latest`;

export async function getData(API) {
    ;
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}