import React, {useEffect, useState} from "react";
import { axiosInstance } from "./axiosInstance";


const AuthContext = React.createContext(undefined)


export const AuthProvider= ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = useState(true);
    const login = async (values) => {
        console.log("getting here")
        try {
            const response = await axiosInstance.post("/auth/login", values);
            if (response.status === 200) {
                console.log(res.data.data.token);
                localStorage.setItem("token",res.data.data.token)
                setIsAuthenticated(true)
                window.location.href="/home"
            }
        } catch (error) {
            console.log(error)
            throw new Error(error.response.data.message);
        }
    }

    const logout = async () => {
        try {
            const response=await axiosInstance.post("/auth/logout");
            if (response.status === 200) {
                setIsAuthenticated(false);
                setUser(null);
                window.location.href = "/login";
            }
        } catch (error) {
            console.log(error);
            setUser(null)
            throw new Error(error);
        }
        setLoading(false);
    }
    const getUserByToken = async () => {
        try {
            const response = await axiosInstance.get("/auth/getUser");
            if (response.status === 200) {
                setUser(response.data.data);
                console.log(response.data.data)
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        } finally {
            
        }
    }

    const signup = async (values) => {
        try {
            const response = await axiosInstance.post("/auth/register", values);
            if (response.status === 200) {
                console.log(response.data);
            }
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        } finally {
            
        }
    }
    const checkAuthentication = async () => {
        try {
            const response = await axiosInstance.get("/auth/getUser");
            setUser(response.data.data);
            console.log(response.data.data)
        } catch (error) {
            setUser(null);
            console.error(error);
            throw new Error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
            checkAuthentication();
        
    }, []);

    return (
        <AuthContext.Provider
            value={{ login, logout, signup, user, loading,isAuthenticated,setUser}}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider")
    }
    return context
}