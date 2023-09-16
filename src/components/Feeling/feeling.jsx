import './feeling.css'

function feeling () {


    return (
        <div>
            <div className='pageNumberContainer'>
                <h4 className='pageNumber'>1 of 4 pages</h4>
            </div>
            
            <br />
            <h3>How are you felling today?</h3>
        <form className="feelingForm">
            <input type="number" min="0" max="5" placeholder="Rating 1-5" />
        </form>
        <br />
        <button>Next</button>
        </div>
    )
}

export default feeling;