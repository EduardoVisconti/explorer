import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api-tsbq.onrender.com/api"
    /* baseURL: "http://localhost:3333/api" */
});