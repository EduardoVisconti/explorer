import axios from "axios";

export const apiImg = axios.create({
    baseURL: "https://foodexplorer-api-tsbq.onrender.com"
    /* baseURL: "http://localhost:3333" */
});