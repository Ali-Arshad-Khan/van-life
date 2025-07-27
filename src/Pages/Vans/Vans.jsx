import { useEffect, useState } from "react";
import {Link, useSearchParams} from "react-router-dom";
export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayVans = typeFilter ? 
    vans.filter(van => van.type.toLowerCase() === typeFilter) : vans
    
    const vansData = displayVans.map((van) => {
        return (
            <div className="vans-card" key={van.id}>
                <Link to={van.id}>
                <img src={van.imageUrl} alt="" />
                <div className="vanscard-content">
                <h3>{van.name}</h3>
                <h3>{`$${van.price}`}<br /><span>/day</span></h3>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        )
    })

      function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <section className="van-page-container">
        <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
        <div className="vanscard-container">
            {vansData}
        </div>
        </section>
    )
}