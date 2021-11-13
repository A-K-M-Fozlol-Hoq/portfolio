import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import profile from '../../../images/profile-color2.png'

const Header = () => {
    return (
        <div className="header-wrapper" style={{backgroundColor:'#FFFBF0', marginTop:'-40px'}}>
            <div className="container">
                {/* <div className="header-info"> */}
                <div className="header-info row d-flex">
                    <div className="col-md-6">
                        <div className="header-title">
                            <h1 style={{color:'black'}}>Welcome to</h1>
                            <h1 style={{color: 'black'}}><span className="greenyellow-highlight">Fozlol Hoq's</span> World</h1>
                        </div>
                        <Typed
                            className="typed-text"
                            strings={["Web designer", "Web Developer", "Content Writer"]}
                            typeSpeed={80}
                            backSpeed={120}
                            loop
                        />
                        <p style={{ fontSize: '20px', color: '#000', width: '90%', textAlign: 'justify', textAlignLast: 'justify'}} className="mt-5 mb-5">Hi there, this is A.K.M Fozlol Hoq, You might see me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that work. That's why I am learning and mastering web development. I am well experienced at MERN stack, Socket IO, SCSS, Bootstrap, Tailwind CSS, Python, AWS, MYSQL, and C++. I have also a strong grip on C, and JAVA, programming languages. My hobby is reading (audio) books, I like to update myself every day to be a better human.</p>
                        <a className="btn btn-success" target="_blank" href="https://www.linkedin.com/in/a-k-m-fozlol-hoq-220424211/">FIND ME ON LINKEDIN</a>
                    </div>
                    <div className="col-md-6" style={{marginTop:'-50px'}}>
                        <img className='profile1' src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;