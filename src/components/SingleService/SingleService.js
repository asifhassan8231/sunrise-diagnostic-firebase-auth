import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../hooks/useServices';

const SingleService = () => {
    const [error, setError] = useState('');
    const { id } = useParams();
    const { services } = useServices();


    const selectedService = services.find(srv => srv.serviceId === parseInt(id));
    if (!selectedService) {
        return <Spinner animation="grow" />;
    }
    const { image, title, description } = selectedService;
    const handleTime = (e) => {
        if (parseInt(e.target.value) > 0 && parseInt(e.target.value) < 8) {
            setError('Please Choose between 8am-11.59pm')
        }
        else {
            setError(' ');
        }
    }
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-12 col-md-6">
                    <img src={image} className="img-fluid" alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="d-flex flex-column w-50">
                        <h4>Reserve your test time:</h4>
                        <label>Date</label>
                        <input className="mb-2" type="date" name="" id="" required />
                        <label>Time</label>
                        <input className="mb-2" type="time" name="" id="" onBlur={handleTime} required />
                        <p className="text-danger">{error}</p>
                        <Link to="/confirmation"><button className="btn btn-info">Submit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;