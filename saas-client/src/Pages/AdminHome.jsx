import React, { useEffect } from "react";
import Footer from './../components/Footer'
import Header from './../components/Header'
const Home=()=>{
    const checkUser=()=>{
        try {
          const userString=localStorage.getItem("user");
          console.log(userString)
          if(userString && userString.length>0){
            const userObject=JSON.parse(userString);
            setUser(userObject);
            window.location.href="/admin-home"

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
            <div className="flex justify-center">
            <h1>You are now logged in as a Admin</h1>
            </div>
            <div className="w-full h-[71vh] border-2 border-slate-400 mt-5 flex" style={{backgroundImage:'url(/employees.jpg)',backgroundPosition:"center",backgroundRepeat:'no-repeat',backgroundSize:'100%'}}>
                    <div className="m-auto">
                        <a href="/users"><button className="m-10 bg-cyan-500 text-2xl hover:shadow-md hover:translate-x-3 duration-500 ease-in-out hover:transition">View Users</button></a>
                        <a href="/add-user"> <button className="m-10 bg-cyan-500 text-2xl hover:shadow-md hover:translate-x-3 duration-500 ease-in-out hover:transition">Add User</button></a>
                    </div>

            </div>
            <Footer />

        </div>
    )
}


export default Home;