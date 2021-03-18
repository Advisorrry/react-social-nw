import React, { Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import './app.scss'
import { ProfilePage } from './pages/ProfilePage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { MessengerPage } from './pages/MessengerPage'
import { UsersPage } from './pages/UsersPage'
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
                        <Route path="/profile" component={ProfilePage} />
                        <Route path="/messenger" component={MessengerPage} />
                        <Route path="/users" component={UsersPage} />
                    </Switch>
                </div>
            </Fragment>
        </Router>
    )
}

export default App
