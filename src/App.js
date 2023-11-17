import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './components/Navbar';
import About from './pages/about';
import Admin from './pages/admin';
import { Login } from './pages/login';
import { Register } from './pages/signup';
import Calender from './pages/calender';
 
function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    }
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exactelement={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/login' element={currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} />
                <Route path='/calender' element={<Calender />} />
            </Routes>
        </Router>
    );
}
 
export default App;