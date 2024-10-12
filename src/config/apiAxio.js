import axios from "axios";

export const apiAxio = axios.create({
    baseURL:'http://192.168.0.50:3000/',
    timeout:120000,
    headers:{
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})
