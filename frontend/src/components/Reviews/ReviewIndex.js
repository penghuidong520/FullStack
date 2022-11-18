import RatingBar from "./RatingBar";
import filledStar from '../../images/filled_star.png';
import emptyStar from '../../images/empty_star.png';
import { Link } from "react-router-dom";
import ReviewIndexItem from "./ReviewIndexItem";

const ReviewIndex = ({reviews, product}) => {
    let totalRating = 0;
    reviews.forEach(review => {
        totalRating += review.rating;
    })

    let avgRating = 0;
    if (reviews.length > 0) {
        avgRating = Math.floor(totalRating / reviews.length);
    }
    // debugger
    const reviewList = reviews.map(review => (
        <ReviewIndexItem key={review.id} review={review} />
    ))

    return (
    <div className="product-review-container">
        <div className="reviews-left-container">
            <h1 id="customer-review-heading">Customer Reviews</h1>
            <div className="average-rating">
                <div className="average-rating-stars">
                    {[...Array(5)].map((start, idx)=>{
                        const ratingValue = idx + 1;
                        return (
                            <img className="avg-stars" src={ratingValue <= avgRating ? filledStar : emptyStar} key={idx} alt="#" />
                        )
                    })}
                </div>
                <span className="avg-rating">{avgRating} out of 5</span>
            </div>
            <span className="total-reviews">{reviews.length} total ratings</span>
            <RatingBar reviews={reviews} />

            <div className="write-review-container">
                <div className="write-review-text">
                    <h2 id="review-h2">Review this product</h2>
                    <span id="review-span">Share your thoughts with other customers</span>
                </div>
                <Link id="write-review-link" to={{
                    pathname: `/${product.id}/review`,
                    query: product
                }} > 
                    <button id="write-review-button" >Write a customer review</button>
                </Link>
            </div>
        </div>

        <div className="reviews-middle-container">
            {reviews.length > 0 && reviewList}
            {reviews.length <= 0 && 
                <div className="no-reviews">
                    <h1>Currently no reviews for this product</h1>
                </div>
            }
        </div>

        <div className="reviews-right-container">
            
        </div>
    </div>
    )
}

export default ReviewIndex;