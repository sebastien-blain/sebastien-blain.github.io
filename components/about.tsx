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
                    <p>I&apos;m currently a 4<sup>th</sup> year Software Engineering student at Concordia University. </p>
                    <p>My education to date has allowed me to learn, apply knowledge in a group environment and experiment with some of the latest programming technologies, including Python, C# and Java. Through projects and Hackathons, I have also learned about Web development for back-end and enough front-end to build and show you this fabulous website <span role="img" aria-label="smilling emoji">&#128512;</span></p>
                    <p>During my internships at <a href="https://accedian.com/" target="_blank" rel="noopener noreferrer"><b>Accedian</b></a> and <a href="https://www.genetec.com/" target="_blank" rel="noopener noreferrer"><b>Genetec</b></a>, I used my skills and participated in the agile development of real-life applications that are used by clients all over the world. <br/> My last internship and current employment is at <a href="https://www.conova.ai/" target="_blank" rel="noopener noreferrer"><b>Conova</b></a> where I am a full-stack developer responsible of the development of the API for our new DreamX application. </p>
                    <p>In the future, I aspire to work with <b>Artificial Intelligence</b> &amp; <b>Machine Learning</b> to develop amazing applications that will impact the lives of many.</p>
                </div>
            </div>
        </div>
    );
}