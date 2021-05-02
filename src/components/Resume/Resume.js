import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faDownload, faGraduationCap, faLaptopCode, faBriefcase, faAtlas, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
    return (
        <div className='resume-secion pb-5'>
            <Navbar></Navbar>

            <h1 className='text-success text-center mt-5 mb-3'>MY RESUME</h1>
            <div className="divider mb-5"></div>
            <button className="btn btn-success mb-5"><a href="https://drive.google.com/file/d/1iyBQUakW129owradmJTM4PnB5PLT2XSA/view?usp=sharing">VIEW RESUME </a> <FontAwesomeIcon icon={faBookOpen} style={{ color: '#fff' }} /></button>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">EDUCATION <FontAwesomeIcon icon={faGraduationCap} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                <h4>B.Sc. in Computer Science and Engineering</h4>
                                <p className="card-text">2018 – Present, StamfordUniversity Bangladesh, Dhaka, Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">PROGRAMMING SKILLS <FontAwesomeIcon icon={faLaptopCode} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                <h4>Comfortable:</h4>
                                <p className="card-text">React.js, JavaScript, ES6, React Router, MongoDB, React Bootstrap, Bootstrap4,HTML5, CSS3, Material UI.</p>
                                <h4>Familiar:</h4>
                                <p className="card-text">Node.js, Express.js, Firebase, d3, GraphQL, SASS, WordPress(Theme Customization), Django.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">ONLINE COURSES <FontAwesomeIcon icon={faAtlas} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                <ul>
                                    <li> <a href="https://web.programming-hero.com/">COMPLETE WEB DEVELOPMENT COURSE</a> </li>
                                    <li><a href="https://codersfoundation.com/courses/fiverr-success/">Fiverr Success</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">EXPERIANCE <FontAwesomeIcon icon={faBriefcase} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                <h4>Web Developer</h4>
                                <p className="card-text">March 2020 - Current</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">KEY SKILLS <FontAwesomeIcon icon={faChartLine} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                <ul>
                                    <li>Communication</li>
                                    <li>Hard worker, Quick Learner</li>
                                    <li>Self- motivation</li>
                                    <li>Ability to work under pressure</li>
                                    <li>Team management</li>
                                    <li>Strong Analytical ability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <button className="btn btn-success mb-5 mt-5"><a href="https://drive.google.com/file/d/1iyBQUakW129owradmJTM4PnB5PLT2XSA/view?usp=sharing">DOWNLOAD RESUME </a> <FontAwesomeIcon icon={faDownload} style={{ color: '#fff' }} /></button>



        </div>
    );
};

export default Resume;
