import rating from "../../assets/ratings.png"
import star from "../../assets/star.png"
export default function Reviews() {
    const reviews = [{
        starImg: `${star}`,
        name: "Elliot",
        date: "December 1, 2022",
        text: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!" 
    },{
        starImg: `${star}`,
        name: "Sandy",
        date: "November 23, 2022",
        text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
    }]
    return (
        <div className="reviews-container">
            <div className="reviews-container-top">
            <h1>Your reviews</h1>
            <p>last <span>30 days</span></p>
            </div>
            <img src={rating} alt="" className="rating-img"/>
            <h2>Reviews ({reviews.length})</h2>
            <div className="review-card-container">
                {
                    reviews.map(review => (
                        <div className="review-card" key={review.date}>
                            <div className="star-row">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <img src={review.starImg} alt="star" key={i} />
                            ))}
                            </div>
                            <p className="name"><span>{review.name}</span> {review.date}</p>
                            <p>{review.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}