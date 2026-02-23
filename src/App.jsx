import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <Router>
            <div className="font-sans text-dark bg-white overflow-x-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
                <ScrollToTop />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
