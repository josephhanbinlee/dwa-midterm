import React from 'react';

function Header() {
    return (
        <header className = "Header">
            <h2> Popular Spring Break Destinations </h2>
            <div className = "CountryNav">
                <a href="/?country=DO">Dominican Republic</a>
                <a href="/?country=BS">Bahamas</a>
                <a href="/?country=JM">Jamaica</a>
                <a href="/?country=PR">Puerto Rico</a>
            </div>
        </header>
    )
}

export default Header;