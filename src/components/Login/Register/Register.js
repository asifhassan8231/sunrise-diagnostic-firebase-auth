import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newError, setNewError] = useState('');
    const history = useHistory();
    const { googleSignIn, isLoading, error, createUser } = useAuth();
    if (isLoading) {
        return <Spinner animation="grow" />;
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push('/home');
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
        history.push('/home');
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center py-3">
                <div className=" border border-primary border-3 p-2 rounded d-flex flex-column align-items-center" style={{ backgroundColor: "#7C83FD" }}>
                    <h2 className="fst-italic fw-light">Register</h2>
                    <h4>{error}</h4>
                    <button className="btn btn-info" onClick={handleGoogleSignIn}>Continue With Google</button>
                    <p>--------or-------</p>
                    <p>Continue With Email</p>
                    <form onSubmit={handleRegister}>
                        <div className="d-flex mb-3">
                            <input type="text" placeholder="First Name" className="form-control" onBlur={handleFirstName} />
                            <input type="text" placeholder="Last Name" className="form-control" onBlur={handleSecondName} />
                            <br />
                        </div>
                        <input type="text" placeholder="Your Email" className="form-control" onBlur={handleEmail} />
                        <br />
                        <input type="password" placeholder="Password" className="form-control" onBlur={handlePassword} />
                        <br />
                        <input type="password" placeholder="Confirm Password" className="form-control" onBlur={handleConfirmPassword} />
                        <br />
                        <input type="submit" value="Register" style={{ backgroundColor: "#88FFF7", padding: "5px", borderRadius: "5px", fontWeight: "600" }} />
                    </form>
                    <p>{newError}</p>
                    <p>Already an user?</p>
                    <Link to="/login" className="text-light">Log in to your account</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;