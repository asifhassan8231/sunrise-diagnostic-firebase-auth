import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
    return (
        <div className="container">
            <h2>Confirmation</h2>
            <h4>Thanks for being with us. We hope your good health and well being.</h4>
            <Link to="/home">Return to home...</Link>
        </div>
    );
};

export default Confirmation;