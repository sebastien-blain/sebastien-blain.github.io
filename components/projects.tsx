import React, { useState } from 'react';
import ProjectCard from './projectCard';
import Masonry from 'react-masonry-css';
import MyPanda from '../images/mypanda.png';
import BoneAppleTea from '../images/boneappletea.gif';
import BoneAppleTea2 from '../images/example2.gif';
import Vault from '../images/vault.jpg';
import Game from '../images/2048.png';
import Simulator from '../images/simulator.png';
import Simulator_zone from '../images/simulator-zone.png';
import Simulator_login from '../images/simulator-login.png';
import ERP_LOGIN from '../images/erp-login.png';
import ERP from '../images/erp.png';
import ERP_SALES from '../images/erp-sales.png';
import ERP_ORDER from '../images/erp-order.png';
import ERP_ITEM from '../images/erp-item.png';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

interface ModalProp {
    id: string;
    project: project | null;
    onClose: () => void;
}

function ModalCustom(props: ModalProp) {
    const { project, onClose, ...other } = props;

    return(<>
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
          <h3>{project?.title}</h3>
          {onClose ? (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
              }}
            >
                <CloseIcon />
            </IconButton>
          ) : null}
      </DialogTitle>
    <DialogContent style={{paddingBottom: '0px'}}>
        <div style={{paddingBottom: '50px', display: 'flex', justifyContent: 'center'}}>
        <AwesomeSlider
          animation="cubeAnimation"
          style={{maxWidth: '640px'}}
          media={project?.img.map((item) => {return ({source: item})})}
        />
        </div>
        <h6 >
            {project?.info}
        </h6>
        <p className="w3-opacity" style={{marginBottom: '0px'}}>Technologies used: {project?.subTitle}</p>
    </DialogContent>
    <DialogActions style={{paddingRight: '48px'}}>
        <p>{project?.link !== '' ?
          <a href={project?.link} target="_blank" rel="noopener noreferrer" className="w3-button w3-light-grey w3-block">See on Github</a> : ''}
        </p>
    </DialogActions>
        </>
    )
}

interface project {
    title:string,
    subTitle:string
    info:string
    img:string[]
    date:string
    link:string
}

const data = [
    {
        title:'Supreme Erp',
        subTitle:'Frontend: React (Typescript), Backend: ExpressJs (Typescript) - MySQL',
        info:'Led a team of 8 people in building an ERP (Enterprise Resource Planning) for a fictional bike store. The system can manage the inventory, handle sales and customers as well as an accounting and analytical section.',
        img:[ERP.src, ERP_LOGIN.src, ERP_ITEM.src, ERP_SALES.src, ERP_ORDER.src],
        date:"2021",
        link:'https://github.com/sebastien-blain/SOEN390-team-9'
    },
    {
        title:'Smart-Home-Simulator',
        subTitle:'JavaFX, MySQL',
        info:'Led a team of 5 students in creating a desktop Java application that allows users to simulate the environment of a smart home. Users can open/close doors, windows and lights, place individuals in various rooms, simulate a security scenario and simulate a heating scenario. Design of the house is fully customizable through a json file.',
        img:[Simulator.src, Simulator_login.src, Simulator_zone.src],
        date:"2020",
        link:'https://github.com/sebastien-blain/Smart-Home-Simulator'
    },
    {
        title:'MyPanda.space - Instagram clone',
        subTitle:'Frontend: React, Backend: Python (Flask) - MongoDB',
        info:'In a team of 5, we developed a web application to share, like and comment pictures.',
        img:[MyPanda.src],
        date:"2020",
        link:'https://github.com/sebastien-blain/SOEN341-Instagram'
    },
    {
        title:'Vault - ConUHacks V - Winner 2nd place, Sponsor challenge CGI',
        subTitle:'Frontend: Vue.js, Backend: ExpressJs - MySQL',
        info:'Vault allows companies to manage and create volunteer events as well as gives volunteers the opportunity to find events easily and participate in them. Additionally, as a volunteer or event manager, you can see statistics such as your performance in past volunteering events.',
        img:[Vault.src],
        date:"2020",
        link:''
    },
    {
        title:'Bone Apple Tea',
        subTitle:'Frontend: React Native, Backend: Python (Flask)',
        info:'IOS application that allows the user to easily choose recipes. Simply swipe right to like a recipe or swipe left to reject one. Instructions and Ingredients of the recipe are availabel upon clicking on the card ',
        img:[BoneAppleTea.src, BoneAppleTea2.src],
        date:"2019",
        link:'https://github.com/sebastien-blain/BoneAppleTea'
    },
    {
        title:'2048 AIs',
        subTitle:'Python (Pygame, NEAT-Python)',
        info:'I made two 2048 clone where one implements a Genetic algorithm and the other implements an Alpha-beta pruning algorithm to find the best possible move. Using the algorithm, the AI is able to win more than 60% of the games.',
        img:[Game.src],
        date:"2019",
        link:''
    }

]

export default function Projects() {

    const [show, setShow] = useState(false);
    const [modalProp, setModalProp] = useState<project | null>(null);


    const showModal = (data:project) => {
        setModalProp(data);
        setShow(true);

    }
    const closeModal = () => {
        setShow(false);
    }
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return (
        <div className="w3-container" style={{ padding: '28px 16px' }} id="projects">
            <h3 className="w3-center">PROJECTS</h3>
            <div className="w3-row-padding" style={{ marginTop: '64px'}}>
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                    {data.map((pro) => {
                        return(<div key={pro.title} onClick={() => showModal(pro)}> <ProjectCard key={pro.title} {...pro}/></div>)
                    })
                    }
                </Masonry>
                <Dialog
                  onClose={closeModal}
                  aria-labelledby="contained-modal-title-vcenter"
                  open={show}
                  maxWidth={'md'}
                  fullWidth={true}
                  disableScrollLock
                >
                <ModalCustom  id={'custom'} project={modalProp} onClose={closeModal}/>
                </Dialog>
            </div>
        </div>

    );
}