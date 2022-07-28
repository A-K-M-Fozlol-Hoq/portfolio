import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import OneDemic from '../OneDemic/OneDemic';
import AllProjectsCompo from '../AllProjectsCompo/AllProjectsCompo';
import ReactProjectsCompo from '../ReactProjectsCompo/ReactProjectsCompo';
import CPPProjectsCompo from '../CPPProjectsCompo/CPPProjectsCompo';
import DjangoProjectsCompo from '../DjangoProjectsCompo/DjangoProjectsCompo';
import KidProjectsCompo from '../KidProjectsCompo/KidProjectsCompo';
import MERNProjectsCompo from '../MERNProjectsCompo/MERNProjectsCompo';
import PHPProjectsCompo from '../PHPProjectsCompo/PHPProjectsCompo';
import Project from '../Project/Project';
import './Projects.css'
import {projectsData} from './kidProjects'
import Footer from '../../Footer/Footer';
import SelectProjectType from '../SelectProjectType/SelectProjectType';
import WorkTogether from '../../Home/WorkTogether/WorkTogether'


const Projects = () => {
    const [ projectCategory, setProjectCategory ] = useState('all')
    return (
        <div className='projects-wrapper'>
            <Navbar></Navbar>
            <div style={{backgroundColor: '#FFFBF0'}}>
            <h1 className='text-center mb-3'>My Recent <span style={{color: '#F56160'}}>Works</span> </h1>
            
            <div style={{background:'#000', height:'5px', width:'250px', margin:'0px auto 50px'}}></div>
            <SelectProjectType setProjectCategory={setProjectCategory}></SelectProjectType>
            <div style={{backgroundColor: '#FFF', marginTop:'100px'}}>
            {
                projectCategory ==='all'?
                <AllProjectsCompo></AllProjectsCompo>
                :
                projectCategory ==='main'?
                <OneDemic></OneDemic>
                :
                projectCategory ==='mern'?
                <MERNProjectsCompo></MERNProjectsCompo>
                :
                projectCategory ==='react'?
                <ReactProjectsCompo></ReactProjectsCompo>
                :
                projectCategory ==='php'?
                <PHPProjectsCompo></PHPProjectsCompo>
                :
                projectCategory ==='cpp'?
                <CPPProjectsCompo></CPPProjectsCompo>
                :
                projectCategory ==='django'?
                <DjangoProjectsCompo></DjangoProjectsCompo>
                :
                projectCategory ==='kid'?
                <KidProjectsCompo></KidProjectsCompo>
                :
                <></>
            }
                
                {/* <h1 className='text-center mt-5 mb-3'><span className='greenyellow-highlight'>KID </span> Projects </h1>
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
                </div> */}
                </div>
            </div>
            <WorkTogether></WorkTogether>
            <Footer></Footer>
        </div>
    );
};

export default Projects;