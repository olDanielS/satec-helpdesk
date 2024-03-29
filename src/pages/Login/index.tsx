import React, {useState, useContext} from "react";
import './login.css';

import logo from '../../assets/logo2.png';
import {Link} from 'react-router-dom';

import { AuthContext } from "../../contexts/auth";

export default function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {signIn, loadingAuth} = useContext(AuthContext)

    async function handleLogin(e:any){
        e.preventDefault();

        console.log(email, password)
        if(!email || !password){
            alert("Ops, todos os campos precisam ser preenchidos")
        }

        await signIn({email, password})

    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="header-login">
                    <img src={logo} alt="logo" id="logo"/>
                </div>

                <form className="form-login" onSubmit={handleLogin}>
                <h1>Login</h1>
                <hr/>
                    <span>Usúario</span>
                    <input type="text" placeholder="email@ifba.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <span>Senha</span>
                    <input type="password" placeholder="********" value={password}
                     onChange={(e) => setPassword(e.target.value)}/>

                    <button className="submit btn">{loadingAuth ? "Acessando..." : "Acessar Conta"}</button>
                </form>


            </div>
        </div>
    //<Link to="/register">Não possui uma conta? <span>Criar Conta</span></Link>
    );
}