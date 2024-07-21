import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className='shadow-drop-center'>
                <li><a href="/home">Home</a></li>
                <li><a href="/settori">Settori</a></li>
                <li><a href="/lavorazioni">Lavorazioni</a></li>
                <li><a href="/knowhow">Know How</a></li>
                <li><a href="/Parcomacchine">Parco Macchine</a></li>
                <li><a href="/Referenze">Referenze</a></li>
                <li><a href="/casehistory">Case History</a></li>
                <li><a href="/contatti">Contatti</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;