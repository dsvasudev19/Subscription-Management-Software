import React from "react";
import {Routes,BrowserRouter,Route, Navigate} from 'react-router-dom'
// import Home from './src/Pages/Home'
import Employees from "./src/Pages/Employees";
import Login from './src/Pages/Login'
import AddEmployee from "./src/Pages/AddEmployee";
import EditEmployee from './src/Pages/EditEmployee'
import SuperAdminLogin from './src/Pages/SuperAdminLogin'
import Sidebar from './src/components/Sidebar'
import AdminLayout from './src/Pages/AdminLayout'
import Plans from './src/Pages/Plans'
import AdminHome from './src/Pages/AdminHome'

import Home from "./src/Pages/Home";
const App=()=>{
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pricing" element={<Plans />} />
                <Route path="/side-bar" element={<Sidebar />} />
                {/* <Route path="/home" element={<Home />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add-employee" element={<AddEmployee />} />
                <Route path="/edit-employee/:id" element={<EditEmployee />} />
                <Route path="/" element={<Navigate to="/login" />} /> */}
                <Route path="/admin-home" element={<AdminHome />} />
                <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/login" element={<SuperAdminLogin />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}



export default App;