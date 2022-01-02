import React from 'react';
import Accedian from '../images/accedian.png';
import Genetec from '../images/genetec.png';
import Conova from '../images/conova.png';
import Leadership from '../images/leadership.png';

export default function About() {
    return (
        <div className="w3-container w3-light-grey w3-padding-64" style={{ padding: '64px 0 0 64 px' }} id="about">
            <div className="w3-row-padding">
                <div className="w3-col m6">
                    <h3>About me.</h3>
                    <p>I&apos;m currently a 4<sup>th</sup> year Software Engineering student at Concordia University. </p>
                    <p>My education to date has allowed me to learn, apply knowledge in a group environment and experiment with some of the latest programming technologies, including Python, C# and Java. Through projects and Hackathons, I have also learned about Web development for back-end and enough front-end to build and show you this fabulous website <span role="img" aria-label="smilling emoji">&#128512;</span></p>
                    <p>During my internships at <a href="https://accedian.com/" target="_blank" rel="noopener noreferrer"><b>Accedian</b></a> and <a href="https://www.genetec.com/" target="_blank" rel="noopener noreferrer"><b>Genetec</b></a>, I used my skills and participated in the agile development of real-life applications that are used by clients all over the world. <br/> My last internship and current employment is at <a href="https://www.conova.ai/" target="_blank" rel="noopener noreferrer"><b>Conova</b></a> where I am a full-stack developer responsible of the development of the API for our new DreamX application. </p>
                    <p>In the future, I aspire to work with <b>Artificial Intelligence</b> &amp; <b>Machine Learning</b> to develop amazing applications that will impact the lives of many.</p>
                </div>
                <div className="w3-col m6">
                    <p className="w3-wide"><i className="fa fa-desktop w3-margin-right"/>Programming</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-center" style={{ width: '90%' }}>90%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-cogs w3-margin-right"/>Quick learner</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-center" style={{ width: '100%' }}>100%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-group w3-margin-right"/>Team work</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-center" style={{ width: '95%' }}>95%</div>
                    </div>
                    <p className="w3-wide"><img className="w3-margin-right" src={Leadership.src} width={20} height={20}/>Leadership</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-center" style={{ width: '90%' }}>90%</div>
                    </div>
                </div>

                <div className="w3-row">
                    <br/>
                    <div className="w3-center w3-col m12">
                        <div className="w3-col m4" style={{ padding: '8px 0 0 8px' }}>
                            <a href="https://accedian.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Accedian.src} alt="Accedian" style={{ width: '50%', height: "50%" }} /></a>
                        </div>
                        <div className="w3-col m4" style={{ padding: '8px 0 0 8px' }}>
                            <a href="https://www.genetec.com/" target="_blank" rel="noopener noreferrer">
                                <img src={Genetec.src} alt="Genetec" style={{ width: '50%', height: "50%" }} /></a>
                        </div>
                        <div className="w3-col m4" style={{ padding: '8px 0 0 8px' }}>
                            <a href="https://www.conova.ai/" target="_blank" rel="noopener noreferrer">
                                <img src={Conova.src} alt="Conova" style={{ width: '43%', height: "50%" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}