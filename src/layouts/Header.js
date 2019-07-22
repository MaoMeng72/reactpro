import React from 'react';
import './assets/css/header.css'

class Header extends React.Component{
    render(){
        return (
            <div className="Header">
                <h3 className="app-header--title">猫眼电影</h3>
                <div className="app-header--pos"></div>
            </div>
        )
    }
}
export default Header