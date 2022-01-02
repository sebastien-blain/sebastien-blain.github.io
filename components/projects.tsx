import React from 'react';
import ProjectCard from './projectCard';
import Masonry from 'react-masonry-css';
import MyPanda from '../images/mypanda.png';
import BoneAppleTea from '../images/boneappletea.gif';
import Vault from '../images/vault.jpg';
import Game from '../images/2048.png';
import Simulator from '../images/simulator.png';
import ERP from '../images/erp.png';

export default function Projects() {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return (
        <div className="w3-container" style={{ padding: '28px 16px' }} id="projects">
            <h3 className="w3-center">PROJECTS</h3>
            <div className="w3-row-padding" style={{ marginTop: '64px' }}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    <ProjectCard
                        title='Supreme Erp'
                        subTitle='Frontend: React (Typescript), Backend: ExpressJs (Typescript) - MySQL'
                        info='Led a team of 8 people in building an ERP (Enterprise Resource Planning) for a fictional bike store. The system can manage the inventory, handle sales and customers as well as an accounting and analytical section.'
                        img={ERP.src}
                        link='https://github.com/sebastien-blain/SOEN390-team-9' />
                    <ProjectCard
                        title='Smart-Home-Simulator'
                        subTitle='JavaFX, MySQL'
                        info='Led a team of 5 students in creating a desktop Java application that allows users to simulate the environment of a smart home. Users can open/close doors, windows and lights, place individuals in various rooms, simulate a security scenario and simulate a heating scenario. Design of the house is fully customizable through a json file.'
                        img={Simulator.src}
                        link='https://github.com/sebastien-blain/Smart-Home-Simulator' />
                    <ProjectCard
                        title='MyPanda.space - Instagram clone'
                        subTitle='Frontend: React, Backend: Python (Flask) - MongoDB'
                        info='In a team of 5, we developed a web application to share, like and comment pictures.'
                        img={MyPanda.src}
                        link='https://github.com/sebastien-blain/SOEN341-Instagram' />
                    <ProjectCard
                        title='Vault - ConUHacks V - Winner 2nd place, Sponsor challenge CGI'
                        subTitle='Frontend: Vue.js, Backend: ExpressJs - MySQL'
                        info='Vault allows companies to manage and create volunteer events as well as gives volunteers the opportunity to find events easily and participate in them. Additionally, as a volunteer or event manager, you can see statistics such as your performance in past volunteering events.'
                        img={Vault.src}
                        link='' />
                    <ProjectCard
                        title='Bone Apple Tea'
                        subTitle='Frontend: React Native, Backend: Python (Flask)'
                        info='IOS application hat allows the user to easily choose recipes. Simply swipe right to like a recipe or swipe left to reject one. Instructions and Ingredients of the recipe are availabel upon clicking on the card '
                        img={BoneAppleTea.src}
                        link='https://github.com/sebastien-blain/BoneAppleTea' />
                    <ProjectCard
                        title='2048 AIs'
                        subTitle='Python (Pygame, NEAT-Python)'
                        info='I made two 2048 clone where one implements a Genetic algorithm and the other implements an Alpha-beta pruning algorithm to find the best possible move. Using the algorithm, the AI is able to win more than 60% of the games.'
                        img={Game.src}
                        link='' />
                </Masonry>
            </div>
        </div>

    );
}