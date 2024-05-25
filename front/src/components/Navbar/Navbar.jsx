import { Link } from "react-router-dom";
import logo from './logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navb">
      <div className="imgn"><Link to="/"><img src={logo} /></Link></div>
      <div className="rows">
      <div className="category">
          <Link to="/Women"><h2>WOMEN</h2></Link>
       </div>
       <div className="category">
          <Link to="/Men"><h2>MEN</h2></Link>
       </div>
       <div className="search">
            <input type="text" name="query" class="search-input" placeholder="Search for items..." />
       </div>
       <div className="contactn">
          <Link to="/Contact"><i className="fas fa-user" style={{ color: 'white' }}></i>  </Link>
       </div>
       <div className="cartn">
          <Link to="/Cart"><i className="fas fa-shopping-bag" style={{ color: 'white' }}></i></Link>
       </div>
      </div>
       
    </nav>
  );
}

export default Navbar