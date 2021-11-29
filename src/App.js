import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from "./pages/mainPage/MainPage";
import ChoicePage from "./pages/choicePage/ChoicePage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignInPage from "./pages/signInPage/SignInPage";
import FinishPage from "./pages/finishPage/FinishPage";

function App(){
    return(
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="select" element={<ChoicePage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="signIn" element={<SignInPage />}/>
            <Route path="finish" element={<FinishPage />}/>
        </Routes>
    )
}

export default App;

