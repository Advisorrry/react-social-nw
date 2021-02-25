import React, { Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import './app.scss'


function App() {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <Navbar  />
                <div>gfdgdgd</div>
            </div>
        </Fragment>
    )
}

export default App
