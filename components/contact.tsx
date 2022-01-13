import React from 'react';
import QR from "../images/qr.png";

export default function Contact() {
    return (
        <div className="w3-container w3-light-grey" style={{ padding: '80px 16px 0 0' }} id="contact" >
            <h3 className="w3-center">CONTACT</ h3>
            <div style={{ marginTop: '48px' }}>
                <a style={{ textDecoration: 'none' }} className="contactIcon w3-large" href={'./CV_Sebastien_Blain-Nadeau_en_fr_2021.pdf'} download ><p className="w3-center"><i className="fa fa-file-pdf-o fa-fw w3-xxlarge w3-margin-right"/> Resume</ p></a>
                <a style={{ textDecoration: 'none' }} className="contactIcon w3-large" href="https://github.com/sebastien-blain" target="_blank" rel="noopener noreferrer"><p className="w3-center"><i className="fa fa-github fa-fw w3-xxlarge w3-margin-right"/> Github</ p></a>
                <a style={{ textDecoration: 'none' }} className="contactIcon w3-large" href="https://linkedin.com/in/sébastienblain-nadeau" target="_blank" rel="noopener noreferrer"><p className="w3-center"><i className="fa fa-linkedin fa-fw w3-xxlarge w3-margin-right"/> LinkedIn</ p></a>
                <div className="w3-center">
                    <img src={QR.src} alt={'qr code'} width={320} height={320}/>
                </div>
              <p className="w3-center">Copyright &copy; Sébastien Blain-Nadeau</p>
            </ div>
        </ div >
    );
}