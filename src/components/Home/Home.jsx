import React from 'react';
import Slides from '../Home/Slides/Slides'
import LocationCards from '../LocationCards/LocationCards';

const Home = (props) => {

    return(
        <div>
            <h1>Welcome to the Home screen!</h1>
            <Slides />
            <LocationCards/>
        </div>
    )
}

export default Home;