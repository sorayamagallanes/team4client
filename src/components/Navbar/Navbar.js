import React from 'react';
import './Navbar.css';
import logo from '../../assets/Tripler.svg';
import Logout from './Logout/Logout';
import Button from '@material-ui/core/Button';


const Navbar = (props) => { // props is a placeholder for information that we pass to a component from a parent component, only pass from parent to child not the other way around

    return(
        <div>
            <nav>
                <img id="logo" src={logo} alt="logo"></img>
                <Logout />
                {/* <Button onClick={props.clearToken()}>Kill It</Button> */}
            </nav>
        </div>
    )
}

export default Navbar;