import './style.css';
import { Link } from 'react-router-dom';

function ChoicePage(){
    return(
        <div className="select-content">
            <div className="content__login">
              <Link to='/signIn'><button className="btn" id="loginBtn">Sign IN</button></Link>
            </div>
            <div className="content__signUn">
              <div className="content__login">
                <Link to='/login'><button className="btn" id="loginBtn">Login</button></Link>
              </div>
            </div>
        </div>
    )
}

export default ChoicePage;