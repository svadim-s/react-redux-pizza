import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Input} from '../components';
import {registration} from '../redux/actions/user';


function Registration() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <form className="box" method="post">
            <h1>Регистрация</h1>
            <Input value={email} setValue={setEmail} type="text" placeholder="Email" />
            <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
            <Link to="/authorization">
                <Button onClick={() => registration(email, password)} outline className="button--registration">Регистрация</Button>
            </Link>
        </form>
    );
}

export default Registration;
