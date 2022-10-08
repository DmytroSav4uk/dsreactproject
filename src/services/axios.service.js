import axios from "axios";

import {baseURL, urls} from "../configs";


const axiosService = axios.create({baseURL})

export {axiosService};

