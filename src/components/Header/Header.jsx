import React from 'react'
import './header.scss'
import logo from '../../assets/img/Cyberpunk2077Logo.png'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className='header'>
            <div className="header__content">
            <div className="header__logo">
               <Link to="/"><img src={logo} alt="logo" /></Link> 
            </div>
            <div className="header__user-name">
                <b>advisorrry</b>
            </div>
            </div>
            
        </header>
    )
}
