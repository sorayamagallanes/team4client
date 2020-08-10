import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';


function App() {

  const [sessionToken, setSessionToken] = useState(undefined);
  console.log(sessionToken);

  // let [one, two, three] = ['Fellowship of the Ring', 'Two Towers', 'Return of the King'];
  // console.log(one, two, three); // this shows the following titles in order!

  return (
    <div className="App">
    {/* whatever we want to see on the page, we need to bring in here....<Navbar> from the Navbar.js and <Auth> from the Auth.js */}
      <Navbar setSession={setSessionToken}></Navbar>
      <Auth/>
    </div>
  );
}

export default App;
