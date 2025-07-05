import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AOSInit from './utils/AOSInit';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <AOSInit />
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
