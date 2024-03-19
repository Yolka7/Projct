import './style.css'
import Button from '../../components/button';
import Input from '../../components/input';
import api from '../../lib/api'
import cookie from 'js-cookie'


import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Authpage() {
    const navigate = useNavigate();

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const handleClick = async (e) => {
        if (!login || !password) return;
        api.post('http://localhost:3000/login', { username: login, password}).then((res) => {
            const token = res.token
            console.log(token)
            if (!token ) console.log("error") 
            cookie.set('token', `Bearer ${token}`, {
                expires: 30,
                httpOnly: false
            })
            navigate("/");
        }).catch((e)=> {
            console.log(e);
        })
    }
    return ( 

        <div className="auth">
            <div className="window">
                <div className="ots">
                    <p className="header">Авторизация</p>
                    <p className="podheader">Пожалуйста, введите данные вашего профиля в полях</p>

                    <Input
                        disabled={false}
                        id="name"
                        label="Логин/Почта"
                        onChange={(value) => setLogin(value)}
                        placeholder="Логин/Почта"
                        value={login}
                        type="text"
                    />

                    <Input
                        disabled={false}
                        id="name1"
                        label="Пароль"
                        onChange={(value) => setPassword(value)}
                        placeholder="Пароль"
                        value={password}
                        type="password"
                    />

                    <p className="btn-forget">Забыли пароль?</p>
                    <Button onClick={handleClick}>
                        Войти
                    </Button>
                    
                    <div style={{ marginTop: "2em" }}>
                        <span className="reg">У вас еще не создана учетная запись? </span>
                        <span className="reg-a">Регистрация</span>
                    </div>
                </div>
            </div>    
        </div>
    );
}
export default Authpage;