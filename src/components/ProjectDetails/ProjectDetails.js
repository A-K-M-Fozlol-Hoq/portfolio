import React from 'react';
import { useParams } from 'react-router';
import './ProjectDetails.css'
const ProjectDetails = () => {
    const { projectId } = useParams();
    return (
        <div>
            <h1>ProjectDetails</h1>
        </div>
    );
};

export default ProjectDetails;