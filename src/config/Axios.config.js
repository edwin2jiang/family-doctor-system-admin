import axios from "axios"
import { baseURL } from "@/config/Axios.config.js"

export const request = axios.create({
    baseURL: baseURL, 
    timeout: 1000,
});