import {NavLink, Link} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../components/AuthContext";
import avatarIcon from "../assets/avatar-icon.png"
export default function Header() {

   const { isLoggedIn, logout } = useAuth()

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

        {/* <NavLink to="login" className="login-link">
            <img src={avatarIcon} alt="" className="login-icon"/>
        </NavLink> */}
         {isLoggedIn ? (
              <Link to="/" className="logout-btn">
                <button onClick={logout} className="logout-btn">
                  Log Out
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <img src={avatarIcon} alt="" className="login-icon"/>
              </Link>
           )}


        </nav>
    </header>
    )
}