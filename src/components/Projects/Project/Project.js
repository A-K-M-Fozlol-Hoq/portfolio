import React from 'react';
import './Project.css'

const Project = ( props ) => {
    const { name, picture, url } = props.project;
    return (
            <div className="project-card col mt-5">
                <div className="card h-100">
                    <img style={{height:'400px'}} src={picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-primary text-center">{name}</h5>
                    </div>
                    <div className="card-footer">
                        <small className=""><a target="_blank" href={url}><button  className='btn btn-success'>Visit Site</button></a></small>
                    </div>
                </div>
            </div>
    );
};

export default Project;