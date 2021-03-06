import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {useLocation, useNavigate} from 'react-router-dom';
import { ErrorP } from "./Login.styled";
import { Container, ResetDivBox } from "./NewPassword.styled"
import { IoFastFoodSharp } from "react-icons/io5"

function validate(input){
    let errors = {};
    if (!input.password) {
        errors.password = "La contraseña es requerida.";
    } else if (input.password.length < 4) {
        errors.password = "contraseña demasiado corta";
    } else if (/[^A-z\s\d][\\]?/g.test(input.password)){
        errors.password = "No puede contener caracteres especiales."
    } else   if (!input.passwordConfirm) {
        errors.passwordConfirm = "Debes confirmar tu contraseña";
    } else if (input.password !== input.passwordConfirm) {
        errors.passwordConfirm = "Las contraseñas no coinciden";
    }
    return errors;
}

export default function NewPassword (){
    //"URLSearchParams" devuelve un objeto creado de esta clase global. Provee read & write del query de una URL!
    //"useLocation()" retorna el objeto "location", que es la url actual de nuestra app.
    //".search" contiene un string iniciando con "?" seguido por los pares keys-values del query
    //por ejemplo:
    //params = new URLSearchParams('user=abc&query=xyz');
    //console.log(params.get('user'));
    // --> Prints 'abc'
    const query = new URLSearchParams(useLocation().search);

    //y aquí obtiene el email de los query params.
    const email = query.get("email");
    
    const [input, setInput] = useState({
        email: email,
        password: "",
        passwordConfirm: ""
    });
    const [errors, setErrors] = useState({});
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleInputChange(e){
        e.preventDefault();
        setInput({
            ...input, [e.target.name]: e.target.value
        });
        setErrors(
            validate({
                ...input, [e.target.name]: e.target.value
            })
        )
    }

    function handleSubmit(e){
        e.preventDefault();
        if(Object.keys(errors).length > 0){
            return toast.error("Must complete all fields correctly.");
        }else{
            /* las pass coinciden, y dispatcha un objeto con e-mail, y los passwords.
            Luego, redirecciona a la página de LogIn. */

            //postNewPassword en Redux

            toast.success('Contraseña modificada con éxito! :D');
/*             dispatch(postNewPassword(input));
            navigate('/login'); */
        }
    }


    return (
        <Container>
            <Toaster/>
            <ResetDivBox>
                <IoFastFoodSharp/>
                <h1>New Password</h1>
                <form onSubmit={handleSubmit}>
                <label>New password:</label>
                <input
                    onChange={handleInputChange}
                    value={input.password}
                    placeholder="Password..."
                    type="password"
                    name="password"
                />
                {errors.password && <ErrorP className="error">{errors.password}</ErrorP>}
                <label>Confirm your password:</label>
                <input
                    onChange={handleInputChange}
                    value={input.passwordConfirm}
                    placeholder="re-enter password"
                    type="password"
                    name="passwordConfirm"
                />
                {errors.passwordConfirm && <ErrorP className="error">{errors.passwordConfirm}</ErrorP>}
                <input type="submit" value="SEND"/>
                </form>
            </ResetDivBox>
        </Container>
    )
}