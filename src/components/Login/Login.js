import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
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
        return <Spinner animation="grow" />;
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
        history.push('/home');
    }
    return (
        <div className="container">
            <div className="d-flex justify-content-center py-3">
                <div className=" border border-primary border-3 p-2 rounded d-flex flex-column align-items-center" style={{ backgroundColor: "#7C83FD" }}>
                    <h2 className="fst-italic fw-light">Login</h2>
                    <h4>{error}</h4>
                    <button className="btn btn-info" onClick={handleGoogleSignIn}>Continue With Google</button>
                    <p>--------or-------</p>
                    <p>Continue With Email</p>
                    <form onSubmit={handleLogin}>
                        <input type="text" placeholder="Your Email" className="form-control" onBlur={handleEmail} />
                        <br />
                        <input type="password" placeholder="Password" className="form-control" onBlur={handlePassword} />
                        <br />
                        <input type="submit" value="Login" style={{ backgroundColor: "#88FFF7", padding: "5px", borderRadius: "5px", fontWeight: "600" }} />
                    </form>
                    <p>{newError}</p>
                    <p>New in the website?</p>
                    <Link to="/register" className="text-light">Create an account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;