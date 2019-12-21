import Api from '../../../Api/Api';

export async function listLocation(){
    return await Api.get(`locations`)
        .then((res)=>res.data)
}

export async function listPeople() {
    return await Api.get('posts')
        .then((res)=>res.data)
}

export async function fetchDataListPeople() {
    return await fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
        .then((response) => {
                return response.json();
            }
        );
}
