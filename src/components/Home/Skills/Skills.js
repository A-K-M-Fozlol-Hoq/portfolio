import React from 'react';
import one from '../../../images/skills/1.png';
import two from '../../../images/skills/2.png';
import three from '../../../images/skills/3.png';
import four from '../../../images/skills/4.png';
import five from '../../../images/skills/5.svg';
import six from '../../../images/skills/6.png';
import seven from '../../../images/skills/7.png';
import eight from '../../../images/skills/8.png';
import nine from '../../../images/skills/9.png';
import ten from '../../../images/skills/10.png';
import './Skills.css'
const Skills = () => {
    return (
        <div className="skill-section">
            <div className='container pb-5 pt-5'>

                <h1 className=' text-center skill-header'>Currently I am <span style={{color:'#BDFE54'}}>learning </span>
                 and <span style={{color:'#F56160'}}>working </span> on</h1>

                <div className="skills" style ={{width:'110%',marginLeft:'-5%', display:'grid', gridTemplateColumns:'repeat(5,1fr)', gridGap:'10px'}}>
                    <div className="single-skill">
                        <img src={one} alt="" />
                        <p>Firebase</p>
                    </div>
                    <div className="single-skill">
                        <img src={two} alt="" />
                        <p>Machine Learning</p>
                    </div>
                    <div className="single-skill">
                        <img src={three} alt="" />
                        <p>MERN Stack</p>
                    </div>
                    <div className="single-skill">
                        <img src={four} alt="" />
                        <p>Python</p>
                    </div>
                    <div className="single-skill">
                        <img src={five} alt="" />
                        <p>Socket IO</p>
                    </div>
                    <div className="single-skill">
                        <img src={six} alt="" />
                        <p>SASS</p>
                    </div>
                    <div className="single-skill">
                        <img src={seven} alt="" />
                        <p>React bootstrap</p>
                    </div>
                    <div className="single-skill">
                        <img src={eight} alt="" />
                        <p>TailWind CSS</p>
                    </div>
                    <div className="single-skill">
                        <img src={nine} alt="" />
                        <p>AWS</p>
                    </div>
                    <div className="single-skill">
                        <img src={ten} alt="" />
                        <p>TypeScript</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skills;