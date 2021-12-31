import React from 'react';
import {Link} from 'react-router-dom'
import './header.styles.scss'

import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () => (
    <div className='header'>
        <Link clasName='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="/contact">Contact US</Link>
            <Link className='option' to="/about">About</Link>
        </div>
    </div>
)

export default Header;