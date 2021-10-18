import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newError, setNewError] = useState('');
    const { googleSignIn, isLoading, error, createUser } = useAuth();
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
    }

    const handleFirstName = e => {
        setFirstName(e.target.value);
    }
    const handleSecondName = e => {
        setSecondName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }


    const handleRegister = e => {
        e.preventDefault();

        if (password.length < 6) {
            setNewError('Password must contain at least 6 characters!')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setNewError('Password must contain two upper cases!')
            return;
        }
        if (password !== confirmPassword) {
            setNewError('Password did not matched!')
            return;
        }
        const name = firstName + ' ' + secondName;
        const userObj = { name, email, password };
        createUser(userObj);
    }

    return (
        <div>
            <h2>register</h2>
            <h4>{error}</h4>
            <button onClick={handleGoogleSignIn}>Continue With Google</button>
            <p>--------or-------</p>
            <p>Continue With Email</p>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="First Name" onBlur={handleFirstName} />
                <input type="text" placeholder="Last Name" onBlur={handleSecondName} />
                <br />
                <input type="text" placeholder="Your Email" onBlur={handleEmail} />
                <br />
                <input type="password" placeholder="Password" onBlur={handlePassword} />
                <br />
                <input type="password" placeholder="Confirm Password" onBlur={handleConfirmPassword} />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>{newError}</p>
            <p>Already an user?</p>
            <Link to="/login">Log in to your account</Link>
        </div>
    );
};

export default Register;