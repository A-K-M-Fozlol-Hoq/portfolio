import React from 'react';
import Footer from '../../Footer/Footer';
// import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import WorkTogether from '../WorkTogether/WorkTogether';


  
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Skills></Skills>
            <WorkTogether></WorkTogether>
            {/* <ContactForm></ContactForm> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;