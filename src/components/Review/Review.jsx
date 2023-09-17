import { Link } from 'react-router-dom';

function Review () {
    
    return (
        <div className="ReviewDiv">
            <h1>Review Your Feedback!</h1>
            <h3>Feelings: </h3>
            <h3>Understand: </h3>
            <h3>Support: </h3>
            <h3>Comments: </h3>

            <Link to="/6"> Submit </Link>

        </div>
    )
}

export default Review;