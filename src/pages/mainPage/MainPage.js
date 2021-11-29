import './style.css';
import { Link } from 'react-router-dom';

function MainPage(){
    return(
        <div className="main-content">
            <div className="content__title">
                <p>Hello</p>
            </div>
            <div className="content__button">
              <Link to="/select"><button id="nextButton">Next</button></Link>
            </div>
        </div>
    )
}

export default MainPage;