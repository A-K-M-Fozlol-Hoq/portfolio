import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

import { faWhatsapp,faLinkedin ,faHackerrank , faGithubSquare, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
{/* 
<i class="fab fa-facebook-square"></i>
*/}
const Footer = () => {
    return (
        <div style={{backgroundColor: '#fff', height: '350px', color:"#000"}}>
            <div style={{ paddingTop: '80px'}}>
                <h1 style={{textAlign: 'center'}}>Contact With Me !</h1>
            </div>
            <div style={{width: '180px', margin:'auto', textAlign:'center'}}>
                <div style={{display:'grid', gridTemplateColumns:'30px 1fr', margin:'20px 0 -10px'}}>
                    <FontAwesomeIcon icon={faEnvelope} /> <p style={{marginTop: '-5px'}}>akmfozlolhoq@gmail.com</p>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'30px 1fr'}}>
                    <FontAwesomeIcon icon={faWhatsapp} /> <p style={{marginTop: '-5px'}}>+88 01758 600731</p>
                </div>
            </div>

            <div className="social">
                <a href="https://www.linkedin.com/in/fozlol/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.hackerrank.com/haqueakmfazlul01" target="_blank">
                    <FontAwesomeIcon icon={faHackerrank} />
                </a>
                <a href="https://github.com/A-K-M-Fozlol-Hoq" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
                <a href="https://www.facebook.com/fozlol.hoq.75/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
            {/* <FontAwesomeIcon icon={faHackerrank} />
            <FontAwesomeIcon icon={faGithubSquare} />
            <FontAwesomeIcon icon={faFacebookSquare} /> */}
            </div>

            <p style={{background:'#000', color:'#fff', textAlign:'center', marginTop:'90px'}}>© 2021 All rights reserved - A.K.M Fozlol Hoq</p>
        </div>
    );
};

export default Footer;