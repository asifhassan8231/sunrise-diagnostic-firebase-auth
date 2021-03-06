import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSun } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    const { user, googleSignOut } = useAuth();
    const element1 = <FontAwesomeIcon icon={faUser} />;
    const element2 = <FontAwesomeIcon icon={faSun} />;
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>{element2} Sunrise Diagnostic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navigation">
                            <Link to="/home">Home</Link>
                            <Link to="/doctors">Doctors</Link>
                            <Link to="/pharmacy">Pharmacy</Link>
                            {!user && <Link to="/login">Login</Link>}
                            {!user && <Link to="/register">Register</Link>}
                            {user && <button onClick={googleSignOut} className="btn btn-info">Logout</button>}
                            {user && <span className="d-flex align-items-center mx-2">{element1}  {user.displayName}</span>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;