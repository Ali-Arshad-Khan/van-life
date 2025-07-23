import { useEffect, useState } from "react";
export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    
    const vansData = vans.map((van) => {
        return (
            <div className="vans-card" key={van.id}>
                <img src={van.imageUrl} alt="" />
                <div className="vanscard-content">
                <h3>{van.name}</h3>
                <h3>{`$${van.price}`}<br /><span>/day</span></h3>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </div>
        )
    })

    return (
        <>
        <h1>Explore our van options</h1>
        <div className="vanscard-container">
            {vansData}
        </div>
        </>
    )
}