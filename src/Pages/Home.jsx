import {Link} from "react-router-dom";
import pexel from "../assets/pexel.jpg"
import pexel2 from "../assets/pexel2.jpg"
export default function Home() {
    return (
        <>
        <div className="hero-section">
            <div className="hero-section-top">
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
            </div>
            <div className="hero-image">
                <img src={pexel} alt="" />
                <img src={pexel2} alt="" />
            </div>
           

        </div>
        </>
    )
}