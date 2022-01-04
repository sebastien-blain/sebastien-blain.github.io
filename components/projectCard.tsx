import React from 'react';

interface card {
    link: string,
    img: string[],
    title: string,
    subTitle: string,
    date: string,
    info: string
}

export default function ProjectCard(props: card) {
    const render = props.link !== '';
    return (
        <div className="w3-col w3-margin-bottom" style={{ cursor:"pointer" }}>
            <span className="portfolio-item d-block">
                <div className={"foto"}>
                    <div>
                <img src={props.img[0]} alt="project" style={{marginBottom: 0, paddingBottom: 0, position: 'relative', width: "100%"}} />
                    <span className="project-date">{props.date}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {props.title}
                  </p>
                    </div>
                </div>
            </span>
        </div>

    );
}