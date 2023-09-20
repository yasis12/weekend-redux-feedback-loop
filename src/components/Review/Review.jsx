import { Link } from 'react-router-dom';
import './Review.css';
import { useSelector } from 'react-redux';

function Review () {

    const feelings = useSelector(store => store.feelings);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    
    return (
        <div className="ReviewDiv">
            <h1>Review Your Feedback!</h1>
            <h3>Feelings: {feelings} </h3>
            <h3>Understanding: {understanding} </h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>

            <Link to="/6"> Submit </Link>

        </div>
    )
}

export default Review;