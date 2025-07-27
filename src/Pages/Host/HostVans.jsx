import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
export default function HostVans() {
    const [hostVans, setHostVans] = useState([]);
    
    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setHostVans(data.vans))
    })
    
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