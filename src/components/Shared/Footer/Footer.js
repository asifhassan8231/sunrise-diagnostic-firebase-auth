import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#DBE6FD" }}>
            <div className="container">
                <div className="row d-flex align-items-center py-3">
                    <div className="col-12 col-md-6">
                        <h3 className="fst-italic fw-light">Contact Us</h3>
                        <p>House #34, Road #2, Baridhara DOHS R/A, Dhaka-1217, Bangladesh.</p>
                        <p>Phone: 09232321, 0232434342</p>
                        <p>E-mail: info@sunrisediagnostic.com</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="fst-italic fw-light">Quick Links</h3>
                        <div className="d-flex flex-column">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/doctors">Doctors</Link>
                            <Link to="/pharmacy">Pharmacy</Link>
                        </div>
                    </div>
                </div>
                <small> &copy; Copyright 2021. Sunrise Diagnostic Lab.</small>
            </div>
        </div>
    );
};

export default Footer;