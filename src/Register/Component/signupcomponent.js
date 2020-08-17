import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';

const Signup = () => {

    const { register, handleSubmit, errors} = useForm();

    let history = useHistory();

    const submit = () => {
        localStorage.setItem('status', 'connected');
        history.push("/posts");
    };

    return (
        <center>
        <h3>Sign up</h3>
        <hr/>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="username" name="username" ref={register({ required: true, minLength: 3 })}/>
            {errors.username && (<p>bad input</p>)}
            <br/>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        <br/>
        <Link to={"/"}>back</Link>
        </center>
    )
};

export default Signup;