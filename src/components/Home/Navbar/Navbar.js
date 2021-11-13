import React from 'react';
import './Navbar.css';
import logo from '../../../images/logo-1.png';
import { Link } from 'react-router-dom';
// import { a } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav-wrapper'>
            {/* <h1 className='text-success'>navbar</h1> */}
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo..." /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

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
            </nav> */}
            <nav className="navbar navbar-expand-lg navbar-light " style={{ marginTop:'-30px', background:'#FFFBF0' }}>
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                      <img src={logo} className="d-block w-100" alt=""/>
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link ml-40" aria-current="page" to="/home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ml-40"  to="/projects">Projects</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ml-40" to="/blogs">Blogs</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ml-40"  to="/resume">Resume</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link ml-40" to="/about">About me</Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;