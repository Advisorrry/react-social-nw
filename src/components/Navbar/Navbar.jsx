import React from 'react'
import './navbar.scss'
import {
   
    Link
  } from "react-router-dom";

export function Navbar() {
    return (
        <div className='navbar'>
            <ul className="navbar__lists">
                <Link to='/profile'><li>Профиль</li></Link>
                <Link to='/dialogs'><li>Мессенджер</li></Link>
                <Link to='/users'><li>Пользователи</li></Link>
                <Link to='/music'><li>Музыка</li></Link>
                <Link to='/settigs'><li>Настройки</li></Link>
                
            </ul>
        </div>
    )
}
