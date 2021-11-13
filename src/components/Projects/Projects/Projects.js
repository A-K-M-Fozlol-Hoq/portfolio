import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import OneDemic from '../OneDemic/OneDemic';
import Project from '../Project/Project';
import './Projects.css'
import {projectsData} from './kidProjects'
import Footer from '../../Footer/Footer';
import SelectProjectType from '../SelectProjectType/SelectProjectType';


const Projects = () => {
    return (
        <div className='projects-wrapper'>
            <Navbar></Navbar>
            <div style={{backgroundColor: '#FFFBF0'}}>
            <h1 className='text-center mb-3'>My Recent <span style={{color: '#F56160'}}>Works</span> </h1>
            
            <div style={{background:'#000', height:'5px', width:'250px', margin:'0px auto 50px'}}></div>
            <SelectProjectType></SelectProjectType>
            <h1 className='text-center mt-5 mb-3'><span className='greenyellow-highlight'>OneDemic</span> </h1>
            <div className="divider mb-2"></div>
            <OneDemic></OneDemic>
            <h1 className='text-center mt-5 mb-3'><span className='greenyellow-highlight'>MERN </span> Stack Projects </h1>
            <div className="divider mb-2"></div>
            <OneDemic></OneDemic>
            <h1 className='text-center mt-5 mb-3'><span className='greenyellow-highlight'>C/C++ </span> Projects </h1>
            <div className="divider mb-2"></div>
            <OneDemic></OneDemic>
            <h1 className='text-center mt-5 mb-3'><span className='greenyellow-highlight'>KID </span> Projects </h1>
            <div className="divider mb-2"></div>
            <div className="container pb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                    {
                        projectsData.map(project => <Project
                            key={project.index}
                            project={project}
                        ></Project>)
                    }
                </div>
            </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Projects;