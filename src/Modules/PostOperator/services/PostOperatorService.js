import Api from '../../../Api/Api';

export async function listLocation(){
    return await Api.get(`locations`)
        .then((res)=>res.data)
}

export async function listPeople() {
    return await Api.get('posts')
        .then((res)=>res.data)
}

export async function listTransactions() {
    return await Api.get('transactions')
        .then((res)=>res.data)
}


// export async function fetchDataListTransactions() {
//     return await fetch("https://192.168.43.120:8085/transactions", {method: "GET"})
//         .then((response) => {
//                 return response.json();
//             }
//         );
// }
