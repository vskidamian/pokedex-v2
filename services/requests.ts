import axios from "axios"

type Get =  {
    url: string;
    params?: any;
}

export const get = async ({url, params = {}}: Get) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/${url}`, params);
        return await res.data
    } catch (error) {
        console.error('xd:', error);
    }
}
