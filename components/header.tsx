import React from 'react';

export default function Header() {
    return (
        <header className={"bgimg-1 w3-display-container w3-grayscale-min"} id="home">
            <div className={"w3-display-middle w3-text-white"} style={{ padding: '48px', top: '45%' }}>
                <span className="w3-jumbo w3-hide-small">Sébastien Blain-Nadeau</span><br />
                <span className="w3-xxlarge w3-hide-large w3-hide-medium">Sébastien Blain-Nadeau</span><br />
                <span className="w3-large">Software Engineering Student and future entrepreneur</span>
            </div>
        </header>
    );
}