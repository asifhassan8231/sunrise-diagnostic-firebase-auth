import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newError, setNewError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { googleSignIn, isLoading, error, signInWithEmail } = useAuth();

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setNewError('Password must contain at least 6 characters!')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setNewError('Password must contain two upper cases!')
            return;
        }

        const userObj = { email, password };
        signInWithEmail(userObj);
    }
    return (
        <div>
            <h2>login</h2>
            <h4>{error}</h4>
            <button onClick={handleGoogleSignIn}>Continue with Google</button>
            <p>--------or-------</p>
            <p>Continue With Email</p>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onBlur={handleEmail} />
                <br />
                <input type="password" placeholder="Password" onBlur={handlePassword} />
                <br />
                <input type="submit" value="Login" />
            </form>
            <p>{newError}</p>
            <p>New in the website?</p>
            <Link to="/register">Create an account</Link>
        </div>
    );
};

export default Login;