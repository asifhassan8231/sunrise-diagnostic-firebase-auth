import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/72dde67d-7c36-4259-a093-430e72c31358')
            //i tried to fetch from doctor.json file but it is not working. so i used fake api of it instead.
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    if (!doctors) {
        return <Spinner animation="grow" />;
    }
    return (
        <div className="container">
            <h2>Doctors here</h2>
            <div className="row">
                {
                    doctors?.map(doc => (
                        <div key={doc.id} className="col-12 py-2 border rounded">
                            <img src={doc.image} className="img-fluid" alt="" />
                            <h2>{doc.name}</h2>
                            <h3>{doc.category}</h3>
                            <h4>{doc.speciality}</h4>
                            <p><span>{doc.days}</span><span>({doc.time})</span></p>
                            <Link to="/confirmation"><button className="btn btn-info">Get Appoinment</button></Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Doctors;