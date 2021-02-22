import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Button, Input} from '../components';
import {authorization} from '../redux/actions/user';

function Authorization() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();

    return (
        <form className="box" method="post">
            <h1>Войти в аккаунт</h1>
            <Input value={email} setValue={setEmail} type="text" placeholder="Email" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
            <Link to="/">
                <Button onClick={() => dispatch(authorization(email, password))} outline className="button--login">Вход</Button>
            </Link>
            <Link to="/registration">
                <Button outline className="button--registration">Регистрация</Button>
            </Link>
        </form>
    );
}

export default Authorization;
