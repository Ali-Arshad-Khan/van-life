import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import starImage from "../../assets/star.png"
import { getHostVans } from "../../api";
export default function Dashboard() {
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
        <div className='hostVans-card dashboard-hostVans-card' key={hostvan.id}>
            <div className="hostVans-card-left">
            <img src = {hostvan.imageUrl} alt={hostvan.name} />
            <div className='hostVans-card-info'>
                <h3>{hostvan.name}</h3>
                <p>${hostvan.price}<span>/day</span></p>
            </div>
            </div>
            <Link to ={`vans/${hostvan.id}`} key={hostvan.id} className="details-link">View</Link>

        </div>
    ))

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }


    return (
        <div className="dashboard-container">
        <div className="dashboard-income">
            <h1>Welcome!</h1>
            <div className="income-middle">
            <p>Income last <span>30 days</span></p>
            <Link to ="income" className="details-link">Details</Link>
            </div>
            <h1>$2,260</h1>
        </div>
        <div className="dashboard-reviews">
            <div className="dashboard-reviews-left">
            <h1>Review score</h1>
            <p><img src={starImage} alt="" /><span>5.0</span>/5</p>
            </div>
            <Link to ="reviews" className="details-link">Details</Link>
        </div>
        <div className="dashboard-vans">
            <div className="dashboard-vans-title">
            <h2>Your listed vans</h2>
            <Link to ="vans" className="details-link">View all</Link>
            </div>
            <div className="dashboard-vans-container">
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
        </div>
        </div>
    )
}