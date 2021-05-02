import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import profile1 from '../../../images/profile1.jpg'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="container">
                <div className="header-info">
                    <div className="col-md-6 mt-5 pt-5">
                        <h1>Welcome to</h1>
                        <h1><span class="greenyellow-highlight">Fozlol Hoq's</span> World</h1>
                        <Typed
                            className="typed-text"
                            strings={["Web designer", "Web Developer", "Content Writer"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                        <p style={{fontSize:'20px'}} class="mt-5 mb-5">You might saw me jumping, climbing buildings, and stopping trains. But nobody pays me a dime for that work. That's why I am learning and mastering web development. I will not stop until I become the Web Development Hero.</p>
                        <a class="btn btn-success" target="_blank" href="https://www.linkedin.com/in/a-k-m-fozlol-hoq-220424211/">FIND ME ON LINKEDIN</a>
                    </div>
                    <div>
                        <img className='profile1' src={profile1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;