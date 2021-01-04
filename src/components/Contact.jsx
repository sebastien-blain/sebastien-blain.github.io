import React from 'react';
import pdf from '../files/Sebastien_Blain-Nadeau_RESUME.pdf';

export default function Contact() {

    return (
        <div className="w3-container w3-light-grey" style={{ padding: '128px 16px' }} id="contact" >
            <h3 className="w3-center">CONTACT</ h3>
            <div style={{ marginTop: '48px' }}>
                <a style={{ textDecoration: 'none' }} className="contactIcon w3-large" href={pdf} download ><p className="w3-center"><i className="fa fa-file-pdf-o fa-fw w3-xxlarge w3-margin-right"></ i> Resume</ p></a>
                <a style={{ textDecoration: 'none' }} className="contactIcon w3-large" href="https://github.com/sebastien-blain" target="_blank" rel="noopener noreferrer"><p className="w3-center"><i className="fa fa-github fa-fw w3-xxlarge w3-margin-right"></ i> Github</ p></a>
                <a style={{ textDecoration: 'none' }} className="contactIcon w3-large" href="https://linkedin.com/in/sébastienblain-nadeau" target="_blank" rel="noopener noreferrer"><p className="w3-center"><i className="fa fa-linkedin fa-fw w3-xxlarge w3-margin-right"></ i> LinkedIn</ p></a>
                <a style={{ textDecoration: 'none' }} className="contactIcon w3-large" href="tel:438-405-1092"><p className="w3-center"><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></ i> 438-405-1092</ p></a>
                <a style={{ textDecoration: 'none' }} className="contactIcon w3-large" href="mailto: sebastienbn8@gmail.com"><p className="w3-center"><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"></ i> sebastienbn8@gmail.com</ p></a>
            </ div>
        </ div >
    );
}