import React from 'react';
import Project from '../Project/Project';
import {allProjectsData} from './allProjectsData';
const AllProjectsCompo = () => {
    return (
        <div>
            <div className="container pb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                        {
                            allProjectsData.map(project => <Project
                                key={project.index}
                                project={project}
                            ></Project>)
                        }
                    </div>
                </div>
        </div>
    );
};

export default AllProjectsCompo;