import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Destination from './components/pages/Destination';
import ScrollToTop from './components/ScrollToTop';
import './App.css';
import Cart from './components/Cart';
import ThankYouPage from './components/ThankYouPage';



function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/sign-up' exact element={<SignUp />} />
          <Route path='/services/:id' element={<Destination />} />
          <Route path='/booked' element={<Cart />} />
          <Route path='/thankyou' element={<ThankYouPage />} />
         
        </Routes>
      </ScrollToTop>
     
      
    </div>
  );
}

export default App;
