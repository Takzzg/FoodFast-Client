import React, { useState } from "react";
import { Container, LoginBox, GoogleButton, ErrorP} from "./Login.styled";
import { IoFastFoodSharp } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/async";

//Validación
function validate(input){
    let errors = {};
    if(!input.email){errors.email="Tu correo es requerido."}
    else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "Debe ser un e-mail";
    };
    if (!input.password) {
        errors.password = "Tu contraseña es requerida.";
    } else if (input.password.length < 4) {
        errors.password = "contraseña demasiado corta";
    } else if (/[^A-z\s\d][\\]?/g.test(input.password)){
        errors.password = "No puede contener caracteres especiales."
    }
    return errors;
}

export default function Login(){

    const [input, setInput] = useState({
        email: "", password: ""
    });
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();
/*     const authData = useSelector(state=> state.user.authData);
    console.log("el estado global authData es: ",authData); */
    function handleInputChange(e){
        e.preventDefault();
        setInput({
            ...input, [e.target.name]: e.target.value
        });
        setErrors(
            validate(
                {...input, [e.target.name]: e.target.value}
            )
        )
    }

    function handleGoogleLogin(e){
        e.preventDefault();
        /* La lógca de sign in con Google */
        toast.success("Successfully loged whit Google!");
    }
    function handleSubmit(e){
        try{
            e.preventDefault();
            if(Object.keys(errors).length > 0){
                toast.error('Debes completar correctamente los campos.')
            }else{
                dispatch(login(input))
                //verificar de alguna forma al usuario logueado.
            }
            navigate('/')
        }catch(e){
            console.log(e);
            toast.error("Contraseña o usuario incorrecto.");
        }
    }

    return(
        <Container>
            <Toaster/>
            <LoginBox>
                <IoFastFoodSharp/>
                <h1>Login here</h1>
                <form onSubmit={e=>{handleSubmit(e)}}>
                    <label>Username (e-mail)</label>
                    <input type="text" name="email" onChange={handleInputChange}
                    value={input.email} placeholder="Enter a e-mail..."/>
                    {errors.email && <ErrorP>{errors.email}</ErrorP>}
                    <br />
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleInputChange}
                    vale={input.password} placeholder="Enter your password..."/>
                    {errors.password && <ErrorP>{errors.password}</ErrorP>}

                    <input type="submit" value="Log In"/>

                    <span style={{fontSize: "16px", 
                    fontFamily: "sans-serif",
                    marginLeft:"120px"}}>or</span>

                    <GoogleButton onClick={e=>{handleGoogleLogin(e)}}>
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        <span className="btn-text"><b>Sign in with Google</b></span>
                    </GoogleButton>

                    <Link to='/passwordReset' className="anchor">Forgot your password?</Link> <br />
                    <Link to='/logup' className="anchor">No registered yet? Sign Up now!</Link>
                </form>
            </LoginBox>
        </Container>
    )
}