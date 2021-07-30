import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import BurgerMenuSvg from './burger-menu-svg';

const NavLinksMobile = () => {
    const [mobileNavShow, setMobileNavShow] = useState(false);
    const mobileNavRef = useRef(null);

    const toggleMobileNav = () => {
        setMobileNavShow(!mobileNavShow);
    }

    useEffect(() => {
        const mobileNavDom = mobileNavRef.current;
        mobileNavDom.classList.contains('display-none') ?
            mobileNavDom.classList.remove('display-none') :
            mobileNavDom.classList.add('display-none');
    }, [mobileNavShow]);


    return (
        <div className="nav-links-mobile">
            <BurgerMenuSvg onClickHandler={toggleMobileNav} />
            <div ref={mobileNavRef} className="nav-links-mobile-main">
                <Link className="nav-link" to="/features">Features</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavLinksMobile;