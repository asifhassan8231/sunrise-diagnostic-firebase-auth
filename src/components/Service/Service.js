import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { serviceId, title, image, description } = props.service;
    const url = `/service/${serviceId}`;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={url}><button>Book Now!</button></Link>
            </div>
        </div>
    );
};

export default Service;