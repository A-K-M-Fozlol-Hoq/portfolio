import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import profile2 from '../../images/profile2.jpg'

import './About.css'
const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 style={{ fontWeight: '400' }} className='greenyellow-highlight mt-5 mb-3 text-center'>ABOUT ME</h1>
            <div className="divider mb-5"></div>
            <div className="about-wrapper">
                <div className="container">
                    <div className="about-info mb-5">
                        <div>
                            <img className='profile2' src={profile2} alt="" />
                        </div>
                        <div className="col-md-6 mt-5 pt-5">
                            <p style={{ fontSize: '20px' }} className="mt-5 mb-5">Hi there, this is A.K.M Fozlol Hoq, A MERN stack web developer. Besides, I am a student of the Computer Science and Engineering(CSE) department of Stamford University Bangladesh(SUB). I am well experienced at MERN stack, Socket IO, SCSS, Bootstrap, Tailwind CSS, Python, AWS, MYSQL, and C++. I have also a strong grip on C, and JAVA, programming languages. My hobby is reading (audio) books, I like to update myself every day to be a better human.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;