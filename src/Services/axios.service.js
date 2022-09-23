import axios from "axios";
import {baseURL} from "../Configs/urls";

const axiosService = axios.create({baseURL});

const getTodos = () =>{

    return axiosService.get('todos')
}

const getAlbums = () =>{

    return axiosService.get('albums')
}

const getComments = () =>{
    return axiosService.get('comments')
}

const getPosts = () =>{
    return axiosService.get('posts')
}





export {getTodos, getComments, getAlbums ,getPosts};