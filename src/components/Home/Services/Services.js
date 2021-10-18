import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../../Service/Service';

//services inside home component
const Services = () => {
    const { services } = useServices();
    return (
        <div>
            <h3>Total Services: {services?.length}</h3>
            <div>
                {
                    services.map(srvs => <Service key={srvs.serviceId} service={srvs}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;