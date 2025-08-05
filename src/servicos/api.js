import axios from "axios";

export const api = axios.create({
    baseURL: 'https://4f8e994d-14f3-4a4b-9384-31f93addd898.mock.pstm.io'
})