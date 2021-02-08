import React from 'react'
import Logo from './Logo'
import NavButton from './NavButton'

const Header = () => {
    return (
        <div className='header'>
            <Logo></Logo>
            <nav className='navButtonRow'>
                <NavButton name='services'></NavButton>
                <NavButton name='portfolio'></NavButton>
                <NavButton name='about'></NavButton>
                <NavButton name='team'></NavButton>
                <NavButton name='contact'></NavButton>
            </nav>
        </div>
    )
}

export default Header