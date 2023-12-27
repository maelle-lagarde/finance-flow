import React from "react";
import { useState } from "react";
import '../App.css';

export default function Login(props) {
    
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin() {
        let formData = new FormData()
        formData.append('login', login)
        formData.append('password',password)

        const response = await fetch('http://localhost/finance-flow/backend/traitement.php?login', {
            method: "POST", 
            mode: "cors",
            body: formData,
        });
        let result = await response.json(); 
        return result
    }

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div>
            <form className="login-form">
                <h1 onChange={handleChange}>Connexion</h1>
                <input onChange={(event)=>{setLogin(event.target.value)}} type="text" name="login" id="login" placeholder="LOGIN"/>
                <input onChange={(event)=>{setPassword(event.target.value)}} type="password" name="password" id="password" placeholder="PASSWORD"/>
                <button onClick={handleLogin} type="button" id="signin">Se connecter</button>
            </form>
            <p id="question" onClick={props.handleIsConnecting}>Vous n'avez pas de compte ?</p>
        </div>
    )
} 
    
