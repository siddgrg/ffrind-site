import React from 'react';
import { Link } from 'gatsby';

const NavLinks = () => {
    return (
        <div className="nav-links">
            <Link className="nav-link" to="/features">Features</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">
                <button className="btn-contact">
                    Contact
                    <svg id="contact-arrow" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3536 4.35356c.1952-.19527.1952-.51185 0-.70711L17.1716.46447c-.1953-.19526-.5119-.19526-.7071 0-.1953.19526-.1953.51184 0 .7071L19.2929 4l-2.8284 2.82843c-.1953.19526-.1953.51184 0 .70711.1952.19526.5118.19526.7071 0l3.182-3.18198zM0 4.5h20v-1H0v1z" />
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default NavLinks;