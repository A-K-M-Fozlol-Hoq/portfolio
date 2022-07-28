import React from 'react';
import './SelectProjectType.css'
const SelectProjectType = (props) => {
    const { setProjectCategory } = props;
    return (
        <div className="select-project-type-wrapper">
            <h2 style={{textAlign: 'center', marginTop:'-15px', marginBottom: '15px'}}>Select Project Type</h2>
            <div style={{background:'#000', height:'1px', width:'250px', margin:'-10px auto 20px'}}></div>
            <div className="project-types">
                <div className="project-type" onClick={()=>{setProjectCategory('all')}}>ALL</div>
                <div className="project-type" onClick={()=>{setProjectCategory('main')}}>Main  Project</div>
                <div className="project-type" onClick={()=>{setProjectCategory('mern')}}>MERN stack</div>
                <div className="project-type" onClick={()=>{setProjectCategory('react')}}>ReactJS</div>
                <div className="project-type" onClick={()=>{setProjectCategory('php')}}>PHP,MYSQL</div>
                <div className="project-type" onClick={()=>{setProjectCategory('cpp')}}>C,C++</div>
                <div className="project-type" onClick={()=>{setProjectCategory('django')}}>Django</div>
                <div className="project-type" onClick={()=>{setProjectCategory('kid')}}>Kid</div>
            </div>
        </div>
    );
};

export default SelectProjectType;