import React, { Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import './app.scss'
import { Profile } from './components/Profile/Profile'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Dialog } from './components/Dialogs/Dialog'

function App() {
    return (
        <Router>
            <Fragment>
                <Header />
                <div className="app-container">
                    <Navbar />
                    <Switch>
                        <Route path='/profile' component={Profile} />
                        <Route path="/dialogs" component={Dialog} />
                    </Switch>
                </div>
            </Fragment>
        </Router>
    )
}

export default App
