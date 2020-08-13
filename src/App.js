import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  // console.log(sessionToken);

  const splashPage = () => {
    return sessionToken !== undefined ?
      <Router><Home token={sessionToken}/></Router>
      :<Auth updateToken={updateToken} />
  }

  const updateToken = newToken => {
    localStorage.setItem('token:', newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken(undefined);
  }

  return (
    <div className="App">
    {/* whatever we want to see on the page, we need to bring in here....<Navbar> from the Navbar.js and <Auth> from the Auth.js */}
      <Navbar clearToken={clearToken}></Navbar>
      {splashPage()}
      {/* <Home/> */}
    </div>
  );
}

export default App;
