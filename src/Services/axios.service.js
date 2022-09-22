import axios from "axios";

import {baseURL, carBaseUrl} from "../Configs/urls";



const axiosCarService = axios.create({carBaseUrl})
const axiosService = axios.create({baseURL});

export {axiosCarService, axiosService}