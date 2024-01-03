import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import MissionVision from './components/pages/MissionVision';
import WeatherDisplay from './components/pages/WeatherDisplay';
import AboutUs from './components/pages/AboutUs';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/sign-up'  element={<SignUp />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/MissionVision" element={<MissionVision />}/>
        <Route path="/WeatherDisplay" element={<WeatherDisplay />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
      </Routes>
    </Router>
    </>
      
    
    
  );
}

export default App;
