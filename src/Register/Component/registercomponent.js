import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';

const defaultValue = {
    username: "",
    email: ""
};

const Register = ({ log, apiRequestRegister, loginRequest }) => {

    const { register, handleSubmit, errors, reset } = useForm();

    let history = useHistory();

    useEffect(() => {
        apiRequestRegister();
    }, []);


    useEffect(() => {
        var status = localStorage?.getItem("status");
        if (status === "connected") {
            history.push("/posts");
        }
    }, []);

    useEffect (() => {
        if (log.loginState.login === "success") {
            history.push("/posts");
        }
        reset(defaultValue);
    }, [log.loginState.login]);

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
            <br/>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        <br/>
        <Link to={"/signup"} >Sign up</Link>
        </center>
    )
};

export default Register;