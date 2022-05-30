import axios from 'axios'
export async function invokeHelloFunction() {

    try {
        const res = await axios.get("/.netlify/functions/hello");
        console.log(res);
        return res;
    }
    catch (inError) {
        console.log(inError);
    }
}

export async function getDataFromRapidAPI(options) {
    try {
        return await axios.request(options);
    }
    catch (inError) {
        console.log(inError);
        return inError
    }
}