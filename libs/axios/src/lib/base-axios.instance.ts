import axios from "axios";

export function createAxiosInstance(baseURL?: string){
    const api = axios.create({
        baseURL,
    });
    
    return api;
}