import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

export default function HostVanDetail() {
    const params = useParams();
    const [van, setVan] = useState(null);
    
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
        <div className = "hostVanDetail-container">
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                <i className={`van-type van-type-${van.type}`}>{van.type}</i>
                    <h3>{van.name}</h3>
                    <p><span>${van.price}</span>/day</p>
                </div>
        </div>
        </section>
    )
}
