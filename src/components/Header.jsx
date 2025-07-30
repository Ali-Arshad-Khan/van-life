import {NavLink, Link} from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import avatarIcon from "../assets/avatar-icon.png";
import burgeMenu from "../assets/burger-list-menu.svg";
import close from "../assets/close.svg";
export default function Header() {

   const { isLoggedIn, logout } = useAuth()

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
            <label for="menu-toggle" class="menu-icon">
            <img src={burgeMenu} alt="" />
            </label>

            <div className="header-card">

          <div className="header-card-left">
            <label for="menu-toggle" class="menu-icon">
            <img src={close} alt="" />
            </label>

           <NavLink 
        to="/"
        className={({isActive}) => isActive ? "active-link" : null}
        >
        Home
        </NavLink>

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

        </div>
        </div>
           </div>
           

          </div>

        </nav>

        
    </header>
    )
}