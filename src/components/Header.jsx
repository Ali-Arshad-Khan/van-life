import {NavLink} from "react-router-dom";
import avatarIcon from "../assets/avatar-icon.png"
export default function Header() {

    function logout() {
      localStorage.removeItem("loggedin")
    }

    return (
    <header>
      <NavLink className="site-logo" to="/">#VANLIFE</NavLink>
      <nav>
        <NavLink 
        to="host"
        className={({isActive}) => isActive ? "active-link" : null}
        >
        Host
        </NavLink>
        
        <NavLink 
        to="about"
        className={({isActive}) => isActive ? "active-link" : null}
        >
        About
        </NavLink>
        
        <NavLink 
        to="vans"
        className={({isActive}) => isActive ? "active-link" : null}
        >
        Vans
        </NavLink>

        <NavLink to="login" className="login-link">
            <img src={avatarIcon} alt="" className="login-icon"/>
        </NavLink>

        <button onClick={logout}>Log Out</button>
      </nav>
    </header>
    )
}