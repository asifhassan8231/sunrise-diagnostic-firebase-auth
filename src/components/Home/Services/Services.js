import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../../Service/Service';

//services inside home component
const Services = () => {
    const { services } = useServices();
    return (
        <div style={{ backgroundColor: '#88FFF7' }}>
            <div className="container py-5">
                <h2 className="fst-italic fw-light">Our Services</h2>
                <div className="row">
                    {
                        services.map(srvs => <Service key={srvs.serviceId} service={srvs}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;