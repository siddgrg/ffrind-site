import React from 'react';

const BurgerMenuSvg = ({ onClickHandler }) => {
    return (
        // taken from: https://css-tricks.com/snippets/svg/svg-hamburger-menu/
        <svg id="burger-menu-svg" viewBox="0 0 100 80" onClick={onClickHandler}>
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
    )
}

export default BurgerMenuSvg;