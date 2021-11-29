import './style.css';
import {Link} from "react-router-dom";

function FinishPage(){
    return(
        <div className="content">
            <div className="content__title">
                <p>You're in!</p>
            </div>
            <div className="content__logOut">
                <Link to='/'><button className="btn" id="logOutBtn">Logout</button>
                </Link>
            </div>
        </div>
    )
}

export default FinishPage;