// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// export default class Navigation extends Component {
//     render() {
//         return (
//             <div>
//                 <nav className='navbar'>
//                     <a className='active' href='#home'>Home</a>
//                     <a href='#news'>News</a>
//                     <a href='#about'>About</a>
//                     <a href='#contact'>Contact</a>
//                     {/* <Link to={`contact`}> 
//                     </Link> */}
//                 </nav>
//             </div>
//         )
//     }
// }

import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon } from 'react-materialize'
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        
        <Navbar className='menu'
        // alignLinks   ="right"
        // brand={<span className="brand-logo">Movie Page</span>}
        style={{ position: 'relative' }}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        class="red darken-4">
            <div class="brand-logo center">Logo</div>
            <ul>
                <li>
                    <Link to='/'><Icon left>home</Icon> Home</Link>
                </li>
                <li to='/about'>
                    <Link to='/about'><Icon left>info_outline</Icon> About</Link>
                </li>
                <li to='/news'>
                    <Link to='/news'><Icon left>dvr</Icon> News</Link>
                </li>
                <li href='/contact'>
                    <Link to='/contact'><Icon left>contacts</Icon> Contact</Link>
                </li>
            </ul>
            
            <div style={{ position: 'absolute', right: '0' }}>
                <a className='switch-mode' onClick={toggle}
                    style={{
                        color: 'white',
                    }} data-testid="toggle-theme-btn">
                    Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                </a>
            </div>
        </Navbar>
    )
}