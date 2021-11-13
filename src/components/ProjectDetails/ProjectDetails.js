import React from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';
import './ProjectDetails.css'
const ProjectDetails = () => {
    const { projectId } = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <h1>ProjectDetails</h1>
            
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;