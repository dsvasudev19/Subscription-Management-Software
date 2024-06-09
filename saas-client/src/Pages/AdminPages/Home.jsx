import React, { useEffect } from "react";

const Home=()=>{
    const [user,setUser]=useState([]);
    
    const checkUser=()=>{
        try {
          const userString=localStorage.getItem("admin");
          console.log(userString)
          if(userString && userString.length>0){
            const userObject=JSON.parse(userString);
            setUser(userObject);
            window.location.href="/admin/"

          }else{
            window.location.href="/admin/login"
            
          }
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
        checkUser();
      },[])

    return (
        <>
            <div>
                <h1>You are Now Logged in as Super Admin</h1>
            </div>
        </>
    )
}


export default Home;