import { Link } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import NavLinks from './nav-links';
import LogoSvg from './logo-svg';
import NavLinksMobile from './nav-links-mobile';

const NavBar = () => {

    return (
        <nav className="nav-bar flex">
            <Link to="/">
                <LogoSvg id="logo-nav" />
            </Link>
            <NavLinks />
            <NavLinksMobile />
        </nav>
    )
}

export default NavBar;