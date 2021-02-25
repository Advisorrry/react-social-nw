import React from 'react'
import './navbar.scss'

export function Navbar() {
    return (
        <div className='navbar'>
            <ul className="navbar__lists">
                <li>Профиль</li>
                <li>Мессенджер</li>
                <li>Музыка</li>
                <li>Пользователи</li>
                <li>Настройки</li>
            </ul>
        </div>
    )
}
