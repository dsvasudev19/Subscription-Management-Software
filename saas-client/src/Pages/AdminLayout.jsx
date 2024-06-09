import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from './../components/Sidebar'
import Header from "../components/AdminHeader";

const AdminLayout=()=>{
    return (
        <div>
        <Header />
        <div className="flex">
            <Sidebar />
            <Outlet className="justify-center m-auto"/>
        </div>

        </div>
    )
}


export default AdminLayout;