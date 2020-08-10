import React, {useState} from 'react'; // add useState to the React import
import './Auth.css';

// good practice to put (props) in as a placeholder, and a naming convention
const Auth = (props) => {

    const [firstName, setFirstName] = useState(''); // created a state variable called firstName
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        // asking to return if login true, then login, if not then signup
        return login ? 'Login': 'Signup'
    }

    const loginToggle = (event) => {
        // this stops from refreshing page, but clearing the information
        event.preventDefault();

        // if not login, then signup
        setLogin(!login);

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }

    const signupFields = () => !login ? 
    (
        <div>
            <label htmlFor="firstName">First Name:</label>
            <br></br>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            <br></br>
            <label htmlFor="lastName">Last Name:</label>
            <br></br>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            <br></br>
        </div>
    ) : null;

    return(
        <div>
            <form>
                <h1>{title()}</h1>
                <br></br>
                {signupFields()}
                <label htmlFor="email">Email:</label>
                <br></br>
                {/* the onChange will call upon the setEmail, and will allow a value of the email to the input that we put in */}
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <label htmlFor="password">Password:</label>
                <br></br>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <br></br>
                <button onClick={loginToggle}>{login ? 'Signup' : 'Login'}</button>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Auth;