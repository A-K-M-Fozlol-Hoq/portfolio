import React from 'react';
import './Skills.css'
const Skills = () => {
    return (
        <div className="skill-section">
            <div className='container pb-5 pt-5'>

                <h1 className=' text-center skill-header'>MY SKILLS!</h1>

                <h3 className='text-danger mt-4'>React</h3>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}> 90% </div>
                </div>

                <h3 className='text-warning mt-4'>Bootstrap</h3>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}> 85% </div>
                </div>

                <h3 className='text-primary mt-4'>Wordpress</h3>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}> 60% </div>
                </div>

                <h3 className='text-warning mt-4'>Javascript</h3>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}> 80% </div>
                </div>

                <h3 className='text-success mt-4'>Node</h3>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}> 70% </div>
                </div>

                <h3 className='text-warning mt-4'>CSS</h3>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}> 85% </div>
                </div>

                <h3 className='text-info mt-4'>MongoDB</h3>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}> 75% </div>
                </div>
            </div>
        </div>

    );
};

export default Skills;