import {Link ,Outlet} from "react-router-dom"
export default function HostLayout() {
    return (
        <>
        <nav className="host-nav">
            <Link to="/host">Dashboard</Link>
            <Link to="/host/Income">Income</Link>
            <Link to="/host/reviews">Reviews</Link>
        </nav>
        <Outlet />
        </>
    )
}