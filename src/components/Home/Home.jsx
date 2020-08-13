import React, {useState} from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Slides from '../Home/Slides/Slides';
import AddLocation from './AddLocation/AddLocation';
import DisplayLocation from './DisplayLocation/DisplayLocation';


const Home = (props) => {

    return(
        <div>
            <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/addlocations'>Add A Destination!</Link></li>
                <li><Link to='/displaylocations'>See My Destinations</Link></li>
            </ul>
            </div>
            <div>
                <Switch>
                    <Route exact path='/'><Slides /></Route>
                    <Route exact path='/home'><Slides/></Route>
                    <Route exact path='/addlocations'><AddLocation token={props.token} /></Route>
                    <Route exact path='/displaylocations'><DisplayLocation token={props.token} /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Home;