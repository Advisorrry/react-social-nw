import React from 'react'
import '../scss/app.scss'
import {AddPosts} from '../components/Profile/AddPosts'
import { ProfileInfo } from '../components/Profile/ProfileInfo'


export  function ProfilePage() {
    return (
        <div className='profile'>
            <div className="profile__container">
                <ProfileInfo />
                
            </div>
            <AddPosts />
        </div>
    )
}
