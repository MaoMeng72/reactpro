import React from 'react';
import {Link, NavLink, Route, Redirect,Switch} from 'react-router-dom'

import Header from './Header';
import Nav from './Nav';
import Hot from '../pages/Hot';
import Upcomming from '../pages/Upcomming';
import Login from '../pages/Login';
import Reg from '../pages/Reg';
import User from '../pages/User';
import Detail from '../pages/Detail';
import ErrorPage from './ErrorPage'
// import Home from '../pages/Home';

import '../assets/css/base.css'

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Header/>
                <Nav/>

                <Switch>
                    {/* <Route path='/home' component={Home} /> */}
                    <Route path='/hot' component={Hot} />
                    <Route path='/upcomming' component={Upcomming} />
                    <Route path='/login' component={Login} />
                    <Route path='/user' component={User} />
                    <Route path='/reg' component={Reg} />
                    <Route path='/detail' component={Detail} />
                    <Redirect exact from="/" to="/hot" />
                    <Route component={ErrorPage}/>
                </Switch>
            </div>

        )
    }
}

export default App;