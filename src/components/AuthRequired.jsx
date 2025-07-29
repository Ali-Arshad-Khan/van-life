import {Navigate, Outlet, useLocation} from "react-router-dom"
export default function AuthRequired() {
    const isLogedIn = localStorage.getItem("loggedin")

    if (!isLogedIn) {
        return (
            <Navigate 
                to="/login" 
                replace 
                state={{message: "You must login", from: location.pathname}}
            />)
    }

    return <Outlet />
}