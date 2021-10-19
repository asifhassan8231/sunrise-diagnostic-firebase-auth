import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { serviceId, title, image, description } = props.service;
    const url = `/service/${serviceId}`;
    return (
        <div className="col-12 col-md-6">
            <div className="row d-flex align-items-center py-3">
                <div className="col-12 col-md-6">
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <h3 className="fw-light">{title}</h3>
                    <p className="font-sans-serif">{description}</p>
                    <Link to={url}><button className="btn btn-primary fw-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;