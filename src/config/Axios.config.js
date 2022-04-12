import axios from "axios"
import { baseURL } from "@/config/ConstVariable.js"

export const request = axios.create({
    baseURL: baseURL, 
    timeout: 1000,
});