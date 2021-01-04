import React from 'react';
import ProjectCard from './ProjectCard';
import MyPanda from '../images/mypanda.png';
import BoneAppleTea from '../images/boneappletea.gif';
import Vault from '../images/vault.jpg';
import Game from '../images/2048.png';

export default function Projects() {

    return (
        <div className="w3-container" style={{ padding: '28px 16px' }} id="projects">
            <h3 className="w3-center">PROJECTS</h3>
            <div className="w3-row-padding" style={{ marginTop: '64px' }}>
                <ProjectCard
                    title='MyPanda.space - Instagram clone'
                    subTitle='Frontend: React, Backend: Python (Flask) - MongoDB'
                    info='In a team of 5, we developed a web application to share, like and comment pictures.'
                    img={MyPanda} />
                <ProjectCard
                    title='Vault - ConUHacks V - Winner 2nd place, Sponsor challenge CGI'
                    subTitle='Frontend: Vue.js, Backend: Node.js - MySQL'
                    info='Vault allows companies to manage and create volunteer events as well as gives volunteers the opportunity to find events easily and participate in them. Additionally, as a volunteer or event manager, you can see statistics such as your performance in past volunteering events.'
                    img={Vault} />
                <ProjectCard
                    title='Bone Apple Tea'
                    subTitle='Frontend: React Native, Backend: Python (Flask)'
                    info='IOS application hat allows the user to easily choose recipes. Simply swipe right to like a recipe or swipe left to reject one. Instructions and Ingredients of the recipe are availabel upon clicking on the card '
                    img={BoneAppleTea} />
                <ProjectCard
                    title='2048 AIs'
                    subTitle='Python (Pygame, NEAT-Python)'
                    info='I made two 2048 clone where one implements a Genetic algorithm and the other implements an Alpha-beta pruning algorithm to find the best possible move. Using the algorithm, the AI is able to win more than 60% of the games.'
                    img={Game} />
            </div>
        </div>

    );
}