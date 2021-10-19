import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/2696448-ai.png';

const NotFound = () => {
    return (
        <div className="container">
            <img src={image} className="img-fluid" alt="" />
            <h2>Page not found!</h2>
            <Link to="/home">Return to home page...</Link>
        </div>
    );
};

export default NotFound;