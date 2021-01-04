import React from 'react';
import { Link } from 'react-scroll';


export default function Navbar() {

    function open() {
        var mySidebar = document.getElementById("mySidebar");
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
        } else {
            mySidebar.style.display = 'block';
        }
    }

    function close() {
        var mySidebar = document.getElementById("mySidebar");
        mySidebar.style.display = "none";
    }

    return (
        <div>
            <div className="w3-top">
                <div className="w3-bar w3-card" id="myNavbar">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <div className={"navitem w3-bar-item w3-button w3-wide"}>Sébastien Blain-Nadeau</div>
                    </Link>
                    <div className="w3-right w3-hide-small" >
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <div className={"navitem w3-bar-item w3-button"}>HOME</div >
                        </Link >
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <div className={"navitem w3-bar-item w3-button"}><i className="fa fa-user"></i> ABOUT</div >
                        </Link >
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <div className={"navitem w3-bar-item w3-button"}><i className="fa fa-th"></i> PROJECTS</div >
                        </Link >

                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <div className={"navitem w3-bar-item w3-button"}><i className="fa fa-envelope"></i> CONTACT</div >
                        </Link >
                    </div >
                    <div className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={open} >
                        <i className="fa fa-bars" ></i >
                    </div >
                </div >
            </div >
            <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{ display: 'none' }
            } id="mySidebar" >
                <div onClick={close} className="w3-bar-item w3-button w3-large w3-padding-16">Close</div>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <div onClick={close} className={"w3-bar-item w3-button"}>HOME</div >
                </Link >
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <div onClick={close} className="w3-bar-item w3-button">ABOUT</div>
                </Link>
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <div onClick={close} className="w3-bar-item w3-button">PROJECTS</div>
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <div onClick={close} className="w3-bar-item w3-button">CONTACT</div>
                </Link>
            </nav >
        </div >
    );
}
