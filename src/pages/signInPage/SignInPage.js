import './style.css';
// import {Link} from "react-router-dom";
import { useState } from "react";

function SignInPage(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');


    function onCreateData(e){
        e.preventDefault();

        // const formData = {
        //     username: username,
        //     email: email,
        //     password: password
        // }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);

        fetch('http://php/check.php', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: formData
        })
            .then(res => res.json)
            .then(data => console.log(data));
    }

    return(
        <form className="signIn-content">
            <div className="content__title">
                <p>Sign in</p>
            </div>
            <div className="content-input">
                <div className="input__username">
                    <label>
                        <input type="text" name="signUsername" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                    </label>
                </div>
                <div className="input__mail">
                    <label>
                        <input type="email" name="signMail" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </label>
                </div>
                <div className="input__password">
                    <label>
                        <input type="password" name="signPassword" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={password}/>
                    </label>
                </div>
                <div className="input__confirmPassword">
                    <label>
                        <input type="password" name="signConfirmPassword" placeholder="Confirm Password"/>
                    </label>
                </div>
                <div className="input__checkBox">
                    <input type="checkbox" name="checkBox" id="checkBox"/>
                        <label htmlFor="checkBox">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia.
                        </label>
                </div>
            </div>
            <div className="signIn__button">
               <button type="submit" className="btn" onClick={onCreateData} id="nextSignInBtn">Next</button>
            </div>
        </form>
    )
}

export default SignInPage;