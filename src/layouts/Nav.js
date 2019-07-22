import React from 'react';
import './assets/css/nav.css'
import {Link, NavLink, Route, Redirect,Switch} from 'react-router-dom'


class Nav extends React.Component{
    render(){
        return (
            <div className="nav">
                <div className="app-nav">
                    <NavLink className="app-nav--title" activeClassName="app-nav--active" to="/hot">正在热映</NavLink>
                    <NavLink className="app-nav--title" activeClassName="app-nav--active" to="upcomming">即将上映</NavLink>
                    {/* <p className="app-nav--title app-nav--active">正在热映</p>
                    <p className="app-nav--title">即将上映</p> */}
                </div>
                <div className="app-nav--pos"></div>
            </div>
        )
    }
}

export default Nav