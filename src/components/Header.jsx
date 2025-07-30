import {NavLink, Link} from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import avatarIcon from "../assets/avatar-icon.png";
import burgeMenu from "../assets/burger-list-menu.svg";
import close from "../assets/close.svg";
export default function Header() {

   const { isLoggedIn, logout } = useAuth()

     useEffect(() => {
    const links = document.querySelectorAll('.menu-link');
    const checkbox = document.getElementById('menu-toggle');

    links.forEach(link => {
      link.addEventListener('click', () => {
        if (checkbox) checkbox.checked = false;
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {
          if (checkbox) checkbox.checked = false;
        });
      });
    };
  }, []);

    return (
    <header>
      <NavLink className="site-logo" to="/">#VANLIFE</NavLink>
      <nav>
        <div className="nav-left">
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

        </div>

        <div className="nav-right">
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

           <div className="burger-menu">
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
            <img src={burgeMenu} alt="" />
            </label>

            <div className="header-card">

          <div className="header-card-left">
            <label htmlFor="menu-toggle" className="menu-icon">
            <img src={close} alt="" />
            </label>

           

        <NavLink 
        to="host"
        className={({isActive}) => `menu-link${isActive ? " active-link" : ""}`}
        >
        Host
        </NavLink>
        
        <NavLink 
        to="about"
        className={({isActive}) => `menu-link${isActive ? " active-link" : ""}`}
        >
        About
        </NavLink>
        
        <NavLink 
        to="vans"
        className={({isActive}) => `menu-link${isActive ? " active-link" : ""}`}
        >
        Vans
        </NavLink>
         {isLoggedIn ? (
              <Link to="/" className="logout-btn">
                <button onClick={logout} className="logout-btn menu-link">
                  Log Out
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <img src={avatarIcon} alt="" className="login-icon menu-link"/>
              </Link>
           )}

        </div>
        </div>
           </div>
           

          </div>

        </nav>

        
    </header>
    )
}