import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Chip } from '@mui/material';

interface work {
    title: string,
    subtitle: string,
    company: string,
    image: string,
    url: string,
    mainTechnology: string,
    technologies: string[],
    date: string,
    icon: string,
    description: string[]
}

export default function Experience() {

    const experiences: work[] = [
      {
        title: "Cloud Developer",
        subtitle: "Cloud Developer Intern (4 months)",
        company: "Conova AI, Montreal, QC",
        image: "",
        url: "",
        mainTechnology: "Python",
        technologies: ["React", "Typescript", "AWS Amplify", "Appsync", "Elasticsearch", "Graphql", "Git"],
        date: "May 2021 - Present",
        icon: "fa fa-code w3-xlarge",
        description: ["Worked on developing the beta version of the Startup software in both front-end and back-end (API).",
          "Took the lead on the development of the API using Amazon Web Services Amplify and Appsync."]
      },
      {
        title: "Software Developer Intern (4 months)",
        subtitle: "",
        company: "Genetec, Montreal, QC",
        image: "",
        url: "",
        mainTechnology: "Python",
        technologies: ["C#", ".NET Framework", "Postman", "Git"],
        date: "May 2020 - August 2021",
        icon: "fa fa-code w3-xlarge",
        description: ["Developed new features of a plugin using the Genetec’s SDK to meet client’s requirements following an agile methodology."]
        },
      {
        title: "Software Quality Assurance Specialist (4 months)",
        subtitle: "Software Quality Assurance Intern (4 months)",
        company: "Accedian, Montreal, QC",
        image: "",
        url: "",
        mainTechnology: "Python",
        technologies: ["Python", "Robot Framework", "Selenium", "Git", "Linux", "Bash"],
        date: "September 2019 - May 2020",
        icon: "fa fa-code w3-xlarge",
        description: ["Developed and improved scripts for tests automation",
        "Worked with remote teams from Vietnam to increase test coverage and save manual executions time"]
      },
      {
        title: "Bachelor of Engineering - Software Engineering Co-op",
        subtitle: "",
        company: "Concordia University, Montreal, QC",
        image: "",
        url: "",
        mainTechnology: "Python",
        technologies: ["Data Structures & Algorithms", "AI", "Machine learning", "Deep learning"],
        date: "2018 - 2022",
        icon: "fa fa-graduation-cap w3-xlarge w3-center",
        description: ["Member of the Institute for Co-operative Education",
          "Dean's List Academic Distinction Honor",
        "GPA 4.12/4.30"],
      }
    ]

    const renderExperience = (work: work) => {
        return(
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={work.date}
                contentStyle={{ background: '#444444', color: '#ffffff' }}
                contentArrowStyle={{ borderRight: '7px solid  #444444' }}
                iconStyle={{
                    background: "#F27604",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                }}
                icon={<i className={work.icon} />}
                key={work.title}>
                <h6 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
                    {work.title}
                </h6>
              {work.subtitle && (
                <h6 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>
                {work.subtitle}
              </h6>)}
                <div className="vertical-timeline-element-subtitle" style={{ textAlign: "left", color:"#FFFFFFCC" }}>
                    {work.company}
                </div>
              <div style={{ textAlign: "left", marginTop: "15px" }}>{work.technologies.map((tech) => {
                return (<Chip key={tech} label={tech} style={{backgroundColor:'#F27604', color: "#FFF", fontFamily: "Raleway", fontSize: '12px' , margin: "4px 2px", borderRadius: 8}} />)
              })}</div>
              <ul style={{ textAlign: "left", marginTop: "15px" }}>{work.description.map((desc) => {
                return (<li key={desc} >{desc}</li>)
              })}</ul>
            </VerticalTimelineElement>
        )
    }
    return (
        <div className="w3-container experience w3-text-white" style={{ padding: '28px 16px' }} id="experience" >
            <h3 className="w3-center">EXPERIENCE</ h3>
            <div style={{ marginTop: '48px' }}>
                <VerticalTimeline>
                    {experiences.map((exp) => renderExperience(exp))}
                </VerticalTimeline>
            </ div>
        </ div >
    );
}