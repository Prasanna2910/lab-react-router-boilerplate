import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
      }}
    >
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <div>Kalvium❤️</div>
      </Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '10%',
        }}
      >
        <Link to="/About" style={{ color: 'white', textDecoration: 'none' }}>
          <li style={{ listStyle: 'none' }}>About</li>
        </Link>
        <Link to="/Contact" style={{ color: 'white', textDecoration: 'none' }}>
          <li style={{ listStyle: 'none' }}>Contact</li>
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
