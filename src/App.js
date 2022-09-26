import logo from './logo.svg';
import './App.css';
import KakaoLogin from './KakaoLogin';
import LoginWithKakao from './LoginWithKakao';
import React, { useEffect } from 'react';

function App() {
    const uri = window.location.href;
    const arr = uri.split('=');

    useEffect(() => {
        window.Kakao.Auth.login({
            scope: 'profile_nickname',
            success: function (authObj) {
                console.log(authObj);
            },
        });
    }, []);
    window.Kakao.Auth.login({
        scope: 'profile_nickname',
        success: function (authObj) {
            console.log(authObj);
        },
    });
    return (
        <div className="App">
            <KakaoLogin />
            <LoginWithKakao />
            <h2>{arr[1]}</h2>
        </div>
    );
}

export default App;
