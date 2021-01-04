import React from 'react';

export default function ProjectCard(props) {
    const render = props.link !== '';
    return (
        <div className="w3-col w3-margin-bottom">
            <div className="w3-card">
                <img src={props.img} alt="project" style={{ width: '100%', height: "80%" }} />
                <div className="w3-container">
                    <h3>{props.title}</h3>
                    <p className="w3-opacity">{props.subTitle}</p>
                    <p>{props.info}</p>
                    <p>{render ?
                        <a href={props.link} className="w3-button w3-light-grey w3-block">See Github</a> : ''}
                    </p>
                </div>
            </div>
        </div>

    );
}