import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from './logo.png';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`results/search?q=${searchQuery}`);
  };

  return (
    <nav className="navb">
      <div className="imgn">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className="rows">
        <div className="category">
          <Link to="/Women"><h2>WOMEN</h2></Link>
        </div>
        <div className="category">
          <Link to="/Men"><h2>MEN</h2></Link>
        </div>
        <div className="search">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="query"
              className="search-input"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className='buts'></button>
          </form>
        </div>
        <div className="contactn">
          <Link to="/Contact"><i className="fas fa-user" style={{ color: 'white' }}></i></Link>
        </div>
        <div className="cartn">
          <Link to="/Cart"><i className="fas fa-shopping-bag" style={{ color: 'white' }}></i></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
