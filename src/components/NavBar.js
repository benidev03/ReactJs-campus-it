import {NavBarItems} from './NavBarItems';
import React, { useState } from 'react';

export default function NavBar(){
    // Create the state menu burger
    const [mobileMenu, setMobileMenu] = useState(false);

    //Create the handler menu burger
    const handlerMobileMenu = () =>{
        setMobileMenu(!mobileMenu);
    }
    
    return(
        <nav className={`navbar ${mobileMenu ? "navbar-mobile" : "hide-nav"}`}>
            <h1 className="navbar-logo">Campus IT</h1>
            
            <ul className="navbar-items">
                {NavBarItems.map((item, index) =>{
                    return(
                        <li className="navbar-link slideDown-3" key = {index}>
                            <a className={item.className} href={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li> 
                    );
                })}
                <button className="loginBtn slideDown-3">Login</button>
            </ul>
            <button className="burgerMenu" onClick = {handlerMobileMenu}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}