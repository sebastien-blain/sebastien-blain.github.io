import React from 'react';

interface card {
    link: string,
    img: string,
    title: string,
    subTitle: string,
    info: string
}

export default function ProjectCard(props: card) {
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
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="w3-button w3-light-grey w3-block">See on Github</a> : ''}
                    </p>
                </div>
            </div>
        </div>

    );
}