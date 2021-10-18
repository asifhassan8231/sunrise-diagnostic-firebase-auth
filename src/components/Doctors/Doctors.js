import React, { useEffect, useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/72dde67d-7c36-4259-a093-430e72c31358')
            //i tried to fetch from doctor.json file but it is not working. so i used fake api of it instead.
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    if (!doctors) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h2>doctors here</h2>
            <div>
                {
                    doctors?.map(doc => (
                        <div key={doc.id}>
                            <img src={doc.image} alt="" />
                            <h2>{doc.name}</h2>
                            <h3>{doc.category}</h3>
                            <h4>{doc.speciality}</h4>
                            <p><span>{doc.days}</span><span>({doc.time})</span></p>
                            <button>Get Appoinment</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Doctors;