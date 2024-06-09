import axios from "axios";

const token=localStorage.getItem("token")?localStorage.getItem("token"):""

export const axiosInstance=new axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true,
    headers:{
        Authorization:`Bearer ${token}`
    }
})