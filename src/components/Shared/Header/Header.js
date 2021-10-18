import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, googleSignOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/Doctors">Doctors</Link>
            <Link to="/Pharmacy">Pharmacy</Link>
            {!user && <Link to="/Login">Login</Link>}
            {!user && <Link to="/Register">Register</Link>}
            {user && <button onClick={googleSignOut}>Logout</button>}
            {user && <span>{user.displayName}</span>}
        </div>
    );
};

export default Header;