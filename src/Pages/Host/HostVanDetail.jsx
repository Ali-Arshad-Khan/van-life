import {useEffect, useState} from "react"
import {useParams , NavLink, Outlet} from "react-router-dom"
import { getVan } from "../../api"

export default function HostVanDetail() {
    const params = useParams();
    const [van, setVan] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

      const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    useEffect(() => {
         async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(params.id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        loadVans()
    },[params.id])
    
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section className="hostVanDetail-page">
         <NavLink
            to=".."
            relative="path"
            className="back-button"
        >&larr; <span>Back to all vans</span></NavLink>
        {van && 
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
         {<Outlet context = {{van}} />}
        </div>
        }
        </section>
    )
}
