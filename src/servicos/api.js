import axios from "axios";

export const api = axios.create({
    baseURL: '10.0.0.40:8080'
})