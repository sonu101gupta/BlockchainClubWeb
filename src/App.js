import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquerry.scss";

const App = () => {
  return (
    <Router>

    <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Services" element={<Services/>}/>

            
            <Route/>
            <Route/>
            <Route/>
        </Routes>
    <Footer/>
    
    
    
    
    </Router>
  )
}

export default App