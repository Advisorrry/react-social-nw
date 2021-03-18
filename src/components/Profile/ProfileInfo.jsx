import React from 'react'
import ava from '../../assets/img/ava1.png'

function ProfileInfo() {
    return (
        <div className="profile__container">
        <div className="profile__img-block">
            <img src={ava} alt="" className="profile__img"/>
            <div className="profile__status">По кайфу</div>
        </div>
        <div className='profile__info-block'>
            <div className="profile__user-name"><b>Alexandr</b></div>
            <ul className='profile__user-info'>
                <li>Город: Moscow</li>
                <li>Работа: props.profile.lookingForAJobDescription</li>
                <li>Сайт: <a href={3}>props.profile.contacts.vk</a></li>
                <li>Дата рождения: 22.01.2002</li>
            </ul>
            
            
        </div>
        
    </div>
    )
}

export default ProfileInfo
