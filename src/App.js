import React, { Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import './app.scss'
import { Profile } from './components/Profile/Profile'
import { MyPosts } from './components/Profile/MyPosts'

function App() {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <Navbar />
                <Profile />
                
            </div>
            <div className="container">
            <MyPosts />
            </div>
        </Fragment>
    )
}

export default App
