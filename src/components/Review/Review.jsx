import { Link, useHistory } from 'react-router-dom';
import './Review.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Review () {

    const feelings = useSelector(store => store.feelings);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    
    const history = useHistory();

    const handleSubmit = () => {
        const formData = {
            feelings,
            understanding,
            support,
            comments
        };
        axios.post('/submit-feedback', formData)
        .then(response => {
            console.log(`data submitted successfully`);
            history.push('/6')
        }).catch(error => {
            console.log('Error submitting data', error);
        });
    };

    return (
        <div className="ReviewDiv">
            <h1>Review Your Feedback!</h1>
            <h3>Feelings: {feelings} </h3>
            <h3>Understanding: {understanding} </h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>
            <br />
            <button onClick={handleSubmit}>Submit</button>


        </div>
    )
}

export default Review;