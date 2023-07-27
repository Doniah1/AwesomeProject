const baseURL = "https://jalessa.onrender.com"

const fetchApi = async (link, method, body) => {
    const url = baseURL + link;

    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }).then(res => res.json())
        .catch((error) => {
            console.error("fetch error", error);
        });

}


export const creatUser = async (body) => {
    const url = "/creatUser";
    return await fetchApi(url, 'post', body)

}
