import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api"

export default function HostVans() {
    const [hostVans, setHostVans] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
         async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setHostVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    },[])
    
    const hostVansElement = hostVans.map(hostvan => (
        <Link to = {hostvan.id} key={hostvan.id} className="host-van-link-wrapper">
        <div className='hostVans-card' key={hostvan.id}>
            <img src = {hostvan.imageUrl} alt={hostvan.name} />
            <div className='hostVans-card-info'>
                <h3>{hostvan.name}</h3>
                <p>${hostvan.price}<span>/day</span></p>
            </div>
        </div>
        </Link>
    ))

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    
    return (
        <section>
        <h1 className="host-vans-title">Your Listed Vans</h1>
        <div className="hostvans-container">
        {
            hostVans.length > 0 ? 
            (
                <section className="hostvans-container">
                    {hostVansElement}
                </section>
            ) 
                :
            (<h2>Loading...</h2>)
        }
        </div>
        </section>
    )
}