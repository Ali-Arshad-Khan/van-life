import {useEffect, useState} from "react"
import {useParams , NavLink, Outlet} from "react-router-dom"

export default function HostVanDetail() {
    const params = useParams();
    const [van, setVan] = useState(null);

      const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans[0]))
    },[])
    
      if (!van) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
         <NavLink
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></NavLink>

        <div className = "hostVanDetail-container">
         <div className="host-van-detail">   
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                <i className={`van-type van-type-${van.type}`}>{van.type}</i>
                    <h3>{van.name}</h3>
                    <p><span>${van.price}</span>/day</p>
                </div>
         </div>   
          <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>

                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>

                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>

                </nav>    
         {<Outlet />}
        </div>

        </section>
    )
}
