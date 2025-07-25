import { Outlet } from "react-router-dom"
export default function Dashboard() {
    return (
        <>
        <h1>Welcome to Dashboard</h1>
        <Outlet />
        </>
    )
}