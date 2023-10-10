
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './components/Navbar';
import About from './pages/about';
import Admin from './pages/admin';
import Login from './pages/login';
import Calender from './pages/calender';
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exactelement={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/calender' element={<Calender />} />
            </Routes>
        </Router>
    );
}
 
export default App;