import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Schemes from './components/Schemes';
import InvestmentSchemes from './components/InvestmentSchemes';
import GovernmentSchemes from './components/GovernmentSchemes';
import BusinessSchemes from './components/BuisnessSchemes';
import './App.css';
import Funding from './components/Funding'; 
import Oppurtunities from './components/Oppurtunities';
import Bank from './components/Bank';
import EducateAndEarn from './components/EducateAndEarn';
import JoinMission from './components/JoinMission';
import Buy from './components/Buy';
import Get from './components/Get';
import Handson from './components/Handson';
import Jobs from './components/Jobs';
import Camp from './components/Camp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/schemes/investment" element={<InvestmentSchemes />} />
          <Route path="/schemes/government" element={<GovernmentSchemes />} />
          <Route path="/schemes/business" element={<BusinessSchemes />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/oppurtunities" element={<Oppurtunities />} />
          <Route path ="/bank" element={<Bank />} />
          <Route path ="/EducateAndEarn" element={<EducateAndEarn />} />
          <Route path ="/JoinMission" element={<JoinMission />} />
          <Route path ="/Buy" element={<Buy />} />
          <Route path ="/Get" element={<Get />} />
          <Route path ="/Handson" element={<Handson />} />
          <Route path ="/jobs" element={<Jobs />} />
          <Route path ="/Camp" element={<Camp />} />
          </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
