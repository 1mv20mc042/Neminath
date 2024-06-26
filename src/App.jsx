import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Neminath from './static/Neminath.jpeg';
import PersonalisedItineraries from './Components/PersonalisedItineraries';
import AffordablePrices from './Components/AffordablePrices';
import CustomerSupport from './Components/CustomerSupport';
import BestDealsGuaranteed from './Components/BestDealsGuaranteed';
import TravelManagement from './Components/TravelManagement';
import PassengerAssistance from './Components/PassengerAssistance';
import Consulting from './Components/Consulting';
import Marketing from './Components/Marketing';
import Visa from './Components/Visa';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          
            <div className="logo">
            <img src = {Neminath} alt="Neminath-Tour And Travels" />
            </div>
            <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
             
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/personalised-itineraries" element={<PersonalisedItineraries />} />
            <Route path="/affordable-prices" element={<AffordablePrices />} />
            <Route path="/customer-support" element={<CustomerSupport />} />
            <Route path="/best-deals-guaranteed" element={<BestDealsGuaranteed />} />
            <Route path="/travel-management" element={<TravelManagement />} />
            <Route path="/passenger-assistance" element={<PassengerAssistance />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/visa" element={<Visa />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;