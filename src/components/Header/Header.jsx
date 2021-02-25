import React from 'react'
import './header.scss'
import logo from '../../assets/img/Cyberpunk2077Logo.png'

export function Header() {
    return (
        <header className='header'>
            <div className="header__content">
            <div className="header__logo">
               <a href="vk.com"><img src={logo} alt="logo" /></a> 
            </div>
            <div className="header__user-name">
                <b>advisorrry</b>
            </div>
            </div>
            
        </header>
    )
}
