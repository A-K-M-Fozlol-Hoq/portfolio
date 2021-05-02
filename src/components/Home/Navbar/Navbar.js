import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { a } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* <h1 className='text-success'>navbar</h1> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo..." /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <FontAwesomeIcon icon={faBars} style={{color:'#fff'}} />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-a" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/blogs">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/resume">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a" href="/about">About me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;