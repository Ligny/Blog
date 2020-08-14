import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const defaultValue = {
    username: "",
    email: ""
};

const Register = ({ signin, apiRequestRegister, loginRequest }) => {

    const { register, handleSubmit, errors, reset } = useForm();

    useEffect(() => {
        apiRequestRegister();
    }, []);

    const submit = (data) => {
        loginRequest(data);
        reset(defaultValue);
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