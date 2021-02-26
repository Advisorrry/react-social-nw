import React, { Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import './app.scss'
import { Profile } from './components/Profile/Profile'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Messenger } from './components/Dialogs/Messenger'

function App() {
    return (
        <Router>
            <Fragment>
                <Header />
                <div className="app-container">
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            {<Redirect to="/profile" />}
                        </Route>
                        <Route path="/profile" component={Profile} />
                        <Route path="/messenger" component={Messenger} />
                    </Switch>
                </div>
            </Fragment>
        </Router>
    )
}

export default App
