import React from 'react';
import banner from '../../../images/Untitled11222.png';

const Banner = () => {
    return (
        <div style={{ backgroundColor: '#7DEDFF' }}>
            <div className="container">
                <div className="row d-flex align-items-center py-5">
                    <div className="col-12 col-md">
                        <h1 className="fw-bold fst-italic">Our Mission</h1>
                        <h2 className="fst-italic fw-light">We are committed to provide affordable services, without any compromise on the quality of service – so that you are able to remain happy.</h2>
                    </div>
                    <div className="col-12 col-md">
                        <img className="img-fluid" src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;