import React from 'react';
import Accedian from '../images/accedian.png';
import Genetec from '../images/genetec.png';
import Conova from '../images/conova.png';
import Leadership from '../images/leadership.png';
import Pic from '../images/linkedin.jpg';

export default function About() {
    return (
        <div className="w3-container w3-light-grey" style={{ paddingRight: '5vw', paddingLeft: '5vw', padding: '28px 0' }} id="about">
            <h3 className="w3-center">ABOUT ME</ h3>
            <div className="w3-row-padding" style={{ marginTop: '48px' }}>

                <div className="w3-col m6" style={{padding: "0 3vw", display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                    <img src={Pic.src} className="w3-round w3-image " alt={'Profile picture'} style={{borderRadius: "64px", width: "75%", backgroundColor: "#222", padding: '8px'}}/>
                </div>
                <div className="w3-col m6" style={{padding: "0 3vw"}}>
                    <p>I am currently a Software Development Engineer II at Amazon Ads.</p>
                    <p>Over the past two years, I have developed scalable backend systems for the Ads Media Planning team, utilizing big data and machine learning to enhance global advertising solutions.</p>
                    <p>I hold a Bachelor's degree in Software Engineering with Great Distinction from Concordia University, where I gained a strong foundation in software engineering principles and design methodologies.</p>
                    <p>During my internships at <a href="https://www.conova.ai/" target="_blank" rel="noopener noreferrer"><b>Conova</b></a>, <a href="https://www.genetec.com/" target="_blank" rel="noopener noreferrer"><b>Genetec</b></a>, and <a href="https://accedian.com/" target="_blank" rel="noopener noreferrer"><b>Accedian</b></a>, I honed my skills in full-stack development, API design, and system integration, preparing me to tackle complex technical challenges in a fast-paced environment.</p>
                    </div>
            </div>
        </div>
    );
}