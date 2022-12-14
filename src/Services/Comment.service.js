import {axiosService} from "./axios.service";
import {urls} from "../Configs/urls";

const commentService = {
    getAll:()=>axiosService.get(urls.comments),
    create:(comment)=>axiosService.post(urls.comments,comment),
    updateById:(id, comment)=>axiosService.put(`${urls.comments}/${id}`, comment),
    deleteById:(id)=>axiosService.delete(`${urls.comments}/${id}`),
};

export {commentService};