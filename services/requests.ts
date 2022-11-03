type Get =  {
    url?: string;
    uri?: string;
    params?: any;
}

export const get = async <T>(reqParams: Get): Promise<T> => {
    const url = reqParams.url ? reqParams.url : `https://pokeapi.co/api/v2/${reqParams.uri}`;

    try {
        const res = await fetch(url, reqParams.params);
        return res.json()
    } catch (error) {
        throw(error)
    }
}
