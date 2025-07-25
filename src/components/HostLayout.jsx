import {NavLink ,Outlet} from "react-router-dom"
export default function HostLayout() {
    const style = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616',
    }
    return (
        <>
        <nav className="host-nav">
            <NavLink 
                to="/host"
                style={({isActive}) => isActive ? style : null}
                end
                >
                    Dashboard
            </NavLink>
            
            <NavLink 
                to="/host/income"
                style={({isActive}) => isActive ? style : null}
                >
                    Income
            </NavLink>
            
             <NavLink 
                to="/host/vans"
                style={({isActive}) => isActive ? style : null}
                >
                    Vans
            </NavLink>

            <NavLink 
                to="/host/reviews"
                style={({isActive}) => isActive ? style : null}
                >
                    Reviews
            </NavLink>
        </nav>
        <Outlet />
        </>
    )
}