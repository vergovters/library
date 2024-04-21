import { useState } from "react";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";

const ProtectedRoute = () => {
    const [isAuthenticated, setIs] = useState(true)

    // if(isLoading){
    //     return null
    // }

    if(isAuthenticated){
        return <Outlet/>
    }

    return <Navigate to="/" replace/>
};

export default ProtectedRoute;