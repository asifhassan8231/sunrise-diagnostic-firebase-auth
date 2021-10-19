import React from 'react';



const Review = () => {
    return (
        <div style={{ backgroundColor: "#96BAFF" }}>
            <div className="container py-5">
                <h2 className="fst-italic fw-light">Customer Review</h2>
                <div className="row d-flex align-items-center py-3">
                    <div className="col-12 col-md-4">
                        <img className="img-fluid" src="https://i.ibb.co/7nP5gmV/karo-kujanpaa-SWYHw-S2hqmo-unsplash.jpg" alt="" />
                        <h4 className="fw-light">Julia Kun (Student)</h4>
                        <blockquote>"There is a spiritual aspect to our lives — when we give, we receive — when a health care service does something good for somebody, that somebody feels good about them!"</blockquote>
                    </div>
                    <div className="col-12 col-md-4">
                        <img className="img-fluid" src="https://i.ibb.co/xGDWGN7/dias-f-Jwroo-Iw-SEs-unsplash.jpg" alt="" />
                        <h4 className="fw-light">Marie Jane (Housewife)</h4>
                        <blockquote>"To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity. That's why I like there service."</blockquote>
                    </div>
                    <div className="col-12 col-md-4">
                        <img className="img-fluid" src="https://i.ibb.co/W2zzXXj/midas-hofstra-tid-SLv-Ua-Ns-unsplash.jpg" alt="" />
                        <h4 className="fw-light">Alex Arura (Engineer)</h4>
                        <blockquote>"To earn the respect (and eventually love) of your Patients, you first have to respect those Patients. That is why Golden Rule behavior is embraced by most of the winning services."</blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;