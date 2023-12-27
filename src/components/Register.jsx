import React from "react";
import { useState } from "react";
import '../App.css';


export default function Register(props) { // on a des props
    
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    async function handleRegister() {
        let formData = new FormData()
        formData.append('login', login)
        formData.append('password',password)
        formData.append('confirmPassword',confirmPassword)


        const response = await fetch('http://localhost/finance-flow/backend/traitement.php?register', {
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
            <form className="register-form">
                <h1 onChange={handleChange}>Inscription</h1>
                <input onChange={(event)=>{setLogin(event.target.value)}} type="text" name="login" id="login" placeholder="LOGIN"/>
                <input onChange={(event)=>{setPassword(event.target.value)}} type="password" name="password" id="password" placeholder="PASSWORD"/>
                <input onChange={(event)=>{setConfirmPassword(event.target.value)}} type="password" name="confirmPassword" id="confirmPassword" placeholder="CONFIRM PASSWORD"/>
                <button onClick={handleRegister} type="button" id="register">S'inscrire</button>
            </form>
            <p id="question" onClick={props.handleIsConnecting}>Vous avez déjà un compte ?</p>
        </div>
    )
} 
    
