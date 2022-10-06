const base_url = "http://localhost:3000/api"
const resource_url = `${base_url}/books`

const base_request = async ({url_path = "", method = "GET", body = null}) =>{
    try{
    const req_params = {
        method,
        headers:{
            'Content-Type': 'aplication/json'
        }}
    if (body){
        req_params.body = JSON.stringify(body)
    }   
    
    
        return  await fetch(`${resource_url}${url_path}`, req_params)
    }catch (error) {
        console.error("HTTP ERROR: ", error);
    }

}

export const get_all_books = async () =>{
    const resp = await base_request({method: "GET"})
    return resp.json() 
}

export const post_books = (body) => base_request({ method: "POST", body });

export const update_book = (id, body) =>
  base_request({ urlPath: `/${id}`, method: "PATCH", body });

export const delete_book = (id) =>
  base_request({ urlPath: `/${id}`, method: "DELETE" });