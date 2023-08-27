import { createAxiosInstance } from "./base-axios.instance";

declare const process: {
    env: {
        NX_USER_SERVICE_URL: string,
    }
}

export const userAPI = createAxiosInstance(process.env.NX_USER_SERVICE_URL);