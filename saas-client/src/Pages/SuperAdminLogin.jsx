"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../axiosInstance";
import { useAuth } from "../AuthContext";
import axios from "axios";

export default function Component() {
  const [user,setUser]=useState()
  const [error,setError]=useState("");
  const [loading,setLoading]=useState();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const loginUser=async()=>{

    try {
      if(details.email && details.password){
        console.log("executing user")
        
        const res=await axios.post("http://localhost:3000/admin/auth/login",details);
       if(res.status===200){
        localStorage.setItem("admin",JSON.stringify(res.data.data.user))
        window.location.href="/admin-home"
       }
      }else{
        setError("Please fill all details")
      }
      
    } catch (error) {
      console.log(error);
      setError(error);
      window.location.href="/login"
    }
  }
  const checkUser=()=>{
    try {
      const userString=localStorage.getItem("user");
      if(userString.length>0){
        const userObject=JSON.parse(userString);
        setUser(userObject);
        window.location.href="/home"
      }else{
        window.location.href="/login"
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    checkUser();
  },[])
  return (
    <div>
    <div className="flex justify-center mt-24">
      <form className="flex w-[50vw] flex-col gap-4 justify-center" onSubmit={loginUser}>
        <h1>You will logged in as a Super Admin</h1>
        <h1 className="m-auto text-pretty font-semibold">Login</h1>
        <h2 className="text-red-600 m-auto">{error}</h2>
        <div className="w-[90%] m-auto">
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="user@gmail.com"
            required
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
          />
        </div>
        <div className="w-[90%] m-auto">
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Your Password"
            required
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
          />
        </div>

        <Button onClick={()=>{loginUser(details)}} className="w-[90%] m-auto">Submit</Button>
      </form>
    </div>
    </div>
  );
}
