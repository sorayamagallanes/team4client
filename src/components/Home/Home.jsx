
import React, {useState} from 'react';
import Slides from '../Home/Slides/Slides';
import Button from '@material-ui/core/Button';
import AddLocation from './AddLocation/AddLocation';
import LocationCards from '../LocationCards/LocationCards';
import DisplayLocation from './DisplayLocation/DisplayLocation';


const Home = (props) => {

    const [addLoc, setAddLoc] = useState(false);
    const [dispLoc, setDispLoc] = useState(false);
    const [dispSlides, setDispSlides] = useState(true);


    const homeScreen = () => {
        return (
            <div>
                {(dispSlides) ? <Slides /> : null}
                {(addLoc) ? <AddLocation token={props.token}/> : null}
                {(dispLoc) ? <DisplayLocation token={props.token}/> : null}
            </div>
        )
    }

    const showAdd = () =>{
        setAddLoc(!addLoc);
        setDispSlides(false);
    }

    const showDisplay = () => {
        setDispLoc(true);
        setDispSlides(false);
    }


    return(
        <div>
            <h1>Welcome to the Home screen!</h1>

            <Slides />
            <LocationCards/>
            <Button onClick={() => showAdd()} variant="outlined" size="large">Add</Button>
            {/* <Slides /> */}
            <hr />
            <Button onClick={() => showDisplay()} variant="outlined" size="large">Display</Button>
            <hr />
            {homeScreen()}

        </div>
    )
}

export default Home;