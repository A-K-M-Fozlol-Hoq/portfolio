import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faDownload, faGraduationCap, faLaptopCode, faBriefcase, faAtlas, faChartLine, faToolbox,
         faCodeBranch, faFileCode} from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

const Resume = () => {
    return (
        <div className='resume-section pb-5' style={{backgroundColor: '#FFFBF0'}}>
            <Navbar></Navbar>

            <div style={{paddingBottom:'80px'}}>
            <h1 className='text-center mb-3' style={{color:'#000'}}>MY RESUME</h1>
            <div style={{background:'#000', height:'5px', width:'100px', margin:'0px auto 50px'}}></div>
            <a role="button" target='_blank' className="btn view-resume-btn mb-5" 
            href="https://drive.google.com/file/d/1iyBQUakW129owradmJTM4PnB5PLT2XSA/view?usp=sharing" rel="noreferrer"
            >VIEW RESUME <FontAwesomeIcon icon={faBookOpen} style={{ color: '#fff' }} /></a> 

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
                                <h3 className="card-title text-center">PROGRAMMING LANGUAGES <FontAwesomeIcon icon={faFileCode} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                {/* <h4></h4> */}
                                <p className="card-text">Expertise: JavaScript, Python, TypeScript, ES-6, C++</p>
                                {/* <h4></h4> */}
                                <p className="card-text">Familiar: C,Java.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">PROGRAMMING SKILLS <FontAwesomeIcon icon={faLaptopCode} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                <h4>Front-end (Expertise):</h4>
                                <p className="card-text">HTML5, CSS3, Bootstrap4,  React JS,  React Router, Material UI, Socket-IO,
                                      Graph QL, Firebase(Auth),Tailwind CSS, SASS, React-Bootstrap.</p>
                                <h4>Front-end (Familiar):</h4>
                                <p className="card-text">Django, d3, WordPress.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">PROGRAMMING SKILLS <FontAwesomeIcon icon={faLaptopCode} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                <h4>Back-end (Expertise):</h4>
                                <p className="card-text">Node JS, Express JS, Socket-IO(server), AWS</p>
                                <h4>Database (Comfortable):</h4>
                                <p className="card-text">mongo DB , mongoose, My SQL </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">Version control <FontAwesomeIcon icon={faCodeBranch} /> and tools <FontAwesomeIcon icon={faToolbox} /></h3>
                                <div className="vertical-line mb-3 mt-3"></div>
                                <h4>Version Control:</h4>
                                <p className="card-text">Git, GitHub.</p>
                                <h4>Tools:</h4>
                                <p className="card-text">Netlify , Heroku , VS code, Chrome Dev Tools, CodeBlocks, NetBeans, PyCharm, IntelliJ IDEA.</p>
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
                                <h4>Fiverr</h4>
                                <p className="card-text">WordPress Developer. March 2020 - December 2020</p>
                                <div style={{height:'1px', background:'#000'}}></div>
                                <h4>Omnihouse UK</h4>
                                <p style={{fontSize:'15px'}}>Full-stack Developer. Sep 2021 – Present</p>
                                <div style={{height:'0.5px', background:'#000'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title text-center">SOFT SKILLS <FontAwesomeIcon icon={faChartLine} /></h3>
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


            <a role="button" target='_blank' className="btn view-resume-btn mb-5 mt-5"
            href="https://drive.google.com/file/d/1iyBQUakW129owradmJTM4PnB5PLT2XSA/view?usp=sharing" rel="noreferrer"
            >DOWNLOAD RESUME <FontAwesomeIcon icon={faDownload} style={{ color: '#fff' }} /></a> 
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Resume;

