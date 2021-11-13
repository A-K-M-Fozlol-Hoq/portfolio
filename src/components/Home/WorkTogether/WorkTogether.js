import React from 'react';
import './WorkTogether.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBookOpen} from '@fortawesome/free-solid-svg-icons';

const WorkTogether = () => {
    return (
        <div style={{backgroundColor: '#000', height: '250px', color:"#fff", marginTop: '50px'}}>
            <div style={{ paddingTop: '60px'}}>
                <h1 style={{textAlign: 'center'}}>Let's Work Together !</h1>
                <a href="https://drive.google.com/file/d/1iyBQUakW129owradmJTM4PnB5PLT2XSA/view?usp=sharing" target="_blank"
                 rel="noreferrer" className='home-view-resume'
                >
                    <div className='btn-download-resume'><FontAwesomeIcon icon={faBookOpen} /> View Resume</div>
                </a>
                
            </div>
        </div>
    );
};


                
export default WorkTogether;