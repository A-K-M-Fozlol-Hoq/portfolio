import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
// import profile2 from '../../images/profile2.jpg'
// import profile2 from '../../images/about.jpg'
import profile2 from '../../images/aboutmain.jpg'
// import profile2 from '../../images/profile-color1.png'
import './About.css'
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div style={{backgroundColor:'#000', color:'#fff'}}>
            <Navbar></Navbar>
            <h1 style={{ fontWeight: '400' }} className='text-black mb-2 text-center'>ABOUT ME</h1>
            <div style={{background:'#000', height:'5px', width:'100px', margin:'auto'}}></div>
            <div className="about-wrapper">
                <div className="container">
                    <div className="about-info mb-5">
                        <div>
                            <img className='profile2' src={profile2} alt="" />
                        </div>
                        <div className="col-md-6 pt-5">
                            <p style={{ fontSize: '20px', textAlign: 'justify'}} className="mt-5 mb-5">Assalamualykum, This is A.K.M FozlolHoq, Studying B.Sc. in CSE at Stamford University Bangladesh. Besides that, I am learning Programming, especially web development and machine learning. Till now I have learned WordPress (basic), MERN STACK,Redux, JavaScript, es-6, typeScript, firebase (auth & hosting), AWS(lambda, SNS, SQS etc),Python, React Bootstrap, Tailwind CSS, SASS, Django(basic) etc. While learning web development I have completed 4 projects including 1 large-scale project. I have done 2 MERN stack websites by myself, and an e-commerce website. I started my career at Omani house. My hobby is reading (audio) books.  In my free time, I like to listen audio books and solve problems at hacker rank and code forces. I like to update myself every day to be a better human.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;