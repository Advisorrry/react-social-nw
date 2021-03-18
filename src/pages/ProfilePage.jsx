import React from 'react'


import {AddPosts} from '../components/Profile/AddPosts'
import ProfileInfo from '../components/Profile/ProfileInfo'


export  function ProfilePage() {
    return (
        <div className='profile'>
            <ProfileInfo />            
            <AddPosts />
        </div>
    )
}
