import React from 'react';
import pokeballIcon from '../assets/pokeball-icon.png';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    return (
        <nav>
            <div className="block">
                <img src={pokeballIcon} alt="pokeball icon" />
            </div>
            <div className="data">
                <GiHamburgerMenu />
            </div>
        </nav>
    )
}

export default Navbar;