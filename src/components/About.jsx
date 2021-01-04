import React from 'react';

export default function About() {

    return (
        <div className="w3-container w3-light-grey w3-padding-64" styles={{ padding: '64px 0 0 64 px' }} id="about">
            <div className="w3-row-padding">
                <div className="w3-col m6">
                    <h3>About me.</h3>
                    <p>I'm currently a 3<sup>rd</sup> year Software Engineering student at Concordia University. </p>
                    <p>My education to date has allowed me to learn, apply knowledge in a group environment and experiment with some of the latest programming technologies, including Python, C# and Java. Through projects and Hackathons, I have also learned about Web development for back-end and enough front-end to build and show you this fabulous website <span role="img" aria-label="smilling emoji">&#128512;</span></p>
                    <p>During my internships at <a href="https://accedian.com/" target="_blank" rel="noopener noreferrer">Accedian</a> and <a href="https://www.genetec.com/" target="_blank" rel="noopener noreferrer">Genetec</a>, I used my skills and participated in the agile development of real-life applications that are used by clients all over the world.</p>
                    <p>In the future, I aspire to work with <b>Artificial Intelligence</b> &amp; <b>Machine Learning</b> to develop amazing applications that will revolutionize the world.</p>
                </div>
                <div className="w3-col m6">
                    <p className="w3-wide"><i className="fa fa-desktop w3-margin-right"></i>Programming</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-center" style={{ width: '85%' }}>85%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-cogs w3-margin-right"></i>Quick learner</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-center" style={{ width: '100%' }}>100%</div>
                    </div>
                    <p className="w3-wide"><i className="fa fa-group w3-margin-right"></i>Team work</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-dark-grey w3-center" style={{ width: '95%' }}>95%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}