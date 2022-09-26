import React, { useEffect } from 'react';
const { Kakao } = window;
const loginWithKakao = () => {
    console.log('hello');
    Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/kakaoLogin',
    });
};

const KakaoLogin = () => {
    useEffect(() => {
        window.Kakao.Auth.login({
            scope: 'profile_nickname',
            success: function (authObj) {
                console.log('이것', authObj);
            },
        });
    }, []);
    return (
        <div>
            <a id="custom-login-btn" onClick={loginWithKakao}>
                <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
            </a>
        </div>
    );
};

export default KakaoLogin;
