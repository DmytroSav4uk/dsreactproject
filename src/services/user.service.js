import {urls} from "../configs";
import {axiosService} from "./axios.service";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`)
}

export {userService}