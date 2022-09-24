import axios from "axios"

type Get =  {
    url?: string;
    uri?: string;
    params?: any;
}

export const get = async (reqParams: Get) => {
    const url = reqParams.url ? reqParams.url : `https://pokeapi.co/api/v2/${reqParams.uri}`;

    try {
        const res = await axios.get(url, reqParams.params);
        return res.data
    } catch (error) {
        console.error('Error:', error);
    }
}
