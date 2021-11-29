import './style.css';
import {Link} from "react-router-dom";

function LoginPage(){
    return(
        <form method="POST" className="login-content" action="../finishPage/finish.html">
            <div className="content__title">
                <p>Login</p>
            </div>
            <div className="login-content__input">
                <div className="input__username">
                    <label>
                        <input type="text" name="loginUsername" placeholder="Username"/>
                    </label>
                </div>
                <div className="input__password">
                    <label>
                        <input type="password" name="loginPassword" placeholder="Password"/>
                    </label>
                </div>
            </div>
            <div className="content__button">
                <Link to='/finish'><button type="submit" className="btn" id="nextLoginBtn">Next</button>
                </Link>
            </div>
        </form>
    )
}

export default LoginPage;