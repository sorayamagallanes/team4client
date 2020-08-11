import React, {useState} from 'react'; // add useState to the React import
import './Auth.css';

const Auth = (props) => {

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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = login ? 'http://localhost:3000/user/login'
            : 'http://localhost:3000/user/create'

        const bodyObj = {
            user: {
                email: email,
                password: password
            }
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => props.updateToken(json.sessionToken))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                <br></br>
                <label htmlFor="email">Email:</label>
                <br></br>
                {/* the onChange will call upon the setEmail, and will allow a value of the email to the input that we put in */}
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <label htmlFor="password">Password:</label>
                <br></br>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <button onClick={loginToggle}>{login ? 'Signup' : 'Login'}</button>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Auth;