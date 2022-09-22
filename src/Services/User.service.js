import {axiosService} from "./axios.service";
import {urls} from "../Configs/urls";


const userService = {
    getAll:()=>axiosService.get(urls.users),
    create:(user)=>axiosService.post(urls.users,user),
    updateById:(id, user)=>axiosService.put(`${urls.users}/${id}`, user),
    deleteById:(id)=>axiosService.delete(`${urls.users}/${id}`),
};





export {userService};