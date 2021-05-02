import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';


  
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Skills></Skills>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;