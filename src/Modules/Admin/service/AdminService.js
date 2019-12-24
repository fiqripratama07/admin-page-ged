import Api from '../../../Api/Api';

export async function listUser(){
    return await Api.get(`users`)
        .then((res)=>res.data)
}

export async function save(params){
    return await Api.post(`users`,params)
        .then((resp)=>resp.data)
}
