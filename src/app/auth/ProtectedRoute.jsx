import { useState, useContext } from "react";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { user} = useContext(AuthContext);

    if(user){
        return <Outlet/>
    }

    return <Navigate to="/" replace/>
};

export default ProtectedRoute;