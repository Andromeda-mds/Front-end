import axios from 'axios';


export const backendURL = "http://localhost:3000/v1/";

export const backendApi = axios.create({
    baseURL: backendURL,
    responseType: "json",
  });