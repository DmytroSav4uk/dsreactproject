import {axiosCarService} from "./axios.service";
import {urls} from "../Configs/urls";


const carService = {
    getAll:()=>axiosCarService.get(urls.cars),
    create:(car)=>axiosCarService.post(urls.cars,car),
    updateById:(id, car)=>axiosCarService.put(`${urls.cars}/${id}`, car),
    deleteById:(id)=>axiosCarService.delete(`${urls.cars}/${id}`),
};

export {carService};