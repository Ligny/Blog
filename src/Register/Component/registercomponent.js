import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const defaultValue = {
    username: "",
    email: ""
};

const Register = ({ signin, apiRequestRegister, loginRequest }) => {

    const { register, handleSubmit, errors, reset } = useForm();

    let history = useHistory();

    useEffect(() => {
        apiRequestRegister();
    }, []);


    useEffect (() => {
        if (signin.loginState.login === "success") {
            history.push("/posts");
        }
        reset(defaultValue);
    }, [signin.loginState.login]);

    const submit = (data) => {
        loginRequest(data);
    }

    return(
        <center>
        <h1>Welcome</h1>
        <hr/>
        <h3>Sign in</h3>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" name="username" ref={register({ required: true, minLength: 3 })}/>
            {errors.username && (<p>bad input</p>)}
            <input type="text" placeholder="email" name="email" ref={register}/>
            <input type="submit" value="Submit" />
        </form>
        </center>
    )
};

export default Register;