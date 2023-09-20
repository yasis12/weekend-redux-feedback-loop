import { Link } from 'react-router-dom';

function EndFeedback () {

    return (
        <div>
            <h1>Thank You for your Feedback!</h1>
            <br /> <br />
            <h3> Would you like to leave new feedback? </h3>
            <Link to="/"> Yes </Link>
        </div>
        
    )
}

export default EndFeedback;