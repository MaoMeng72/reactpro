import React from 'react';
import Nav from '../layouts/Nav'
import Hot from './Upcomming'
import Upcomming from './Upcomming';

class Home extends React.Component{
    render(){
        return (
            <div className='home'>
                <Nav/>
                <Hot/>
                {/* <Upcomming/> */}
            </div>
        )
    }
}

export default Home