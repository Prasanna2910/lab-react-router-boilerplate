import { Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import './App.css';

import Navbar from './Component/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          style={{ color: 'white', textDecoration: 'none' }}
        />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        {/* <Route exact path="/Navbar" element={<Navbar />} /> */}
        <Route
          exact
          path="*"
          element={<h1 style={{ textAlign: 'center' }}>404 page not found</h1>}
        />
      </Routes>
    </div>
  );
}
export default App;
