const base_url = 'http://localhost:3000/api'
const resource_url = `${base_url}/books`

const base_request = async ({url_path = "", method = "GET", body = null}) =>{
    const req_params = {
        method,
        headers:{
            'Content-Type': 'aplication/json'
        }}
    if (body){
        req_params.body = JSON.stringify(body)
    }   
    
    try{
        return  await fetch(`${resource_url}/${url_path}`, req_params)
    }catch (error) {

    }

}

export const get_all_books = async () =>{
    const resp = await base_request({method: "GET"})
    return resp.json() 
}