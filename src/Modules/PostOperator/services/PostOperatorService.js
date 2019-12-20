import Api from '../../../Api/Api';

export async function listLocation(){
    return await Api.get(`locations`)
        .then((res)=>res.data)
}

// export async function save(params){
//     return await Api.post(`menu`,params)
//         .then((resp)=>resp.data)
// }
