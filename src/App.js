import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';



function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  // console.log(sessionToken);

  const splashPage = () => {
    return sessionToken !== undefined ?
      <Home token={sessionToken}/>:
      <Auth updateToken={updateToken} />
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
    </div>
  );
}

export default App;
