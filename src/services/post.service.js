import {urls} from "../configs";
import {axiosService} from "./axios.service";

const postService = {
    getAll:()=>axiosService.get(urls.posts),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}


export {postService};