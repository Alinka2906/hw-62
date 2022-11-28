import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./Navbar/Navbar";
import Home2 from "./containers/Home/Home2";
import AboutUs from "./containers/AboutUS/AboutUS";
import Contacts from "./containers/Contacts/Contacts";
import AboutMe from "./containers/AboutMe/AboutMe";

function App() {

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={(
          <Home2/>
        )}></Route>
        <Route path="/about-us" element={(
          <AboutUs/>
        )}></Route>
        <Route path="/contacts" element={(
          <Contacts/>
        )}></Route>
        <Route path="/aboutMe" element={(
          <AboutMe/>
        )}></Route>
      </Routes>
    </div>
  );
}

export default App;
