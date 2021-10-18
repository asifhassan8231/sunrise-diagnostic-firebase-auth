import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../hooks/useServices';

const SingleService = () => {
    const { id } = useParams();
    const { services } = useServices();


    const selectedService = services.find(srv => srv.serviceId === parseInt(id));
    if (!selectedService) {
        return <h3>Loading....</h3>
    }
    const { image, title, description } = selectedService;
    const handleTime = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <input type="date" name="" id="" />
                    <input type="time" name="" id="" onChange={handleTime} />
                    <Link to="/confirmation"><button>Submit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;