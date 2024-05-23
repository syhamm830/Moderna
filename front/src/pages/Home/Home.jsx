import './Home.css';
import main from './main.jpg'
import { Link } from "react-router-dom";

function Home() {
  return (
      <>
      <div className="topm">
        <p>New here? Get 20% off everything! with code : ImNew</p>
      </div>
      <div className='mainp'>
     
        <img src={main} />
        <div className="button-container">
          <Link to="/Women"><button>SHOP WOMEN</button></Link>
          <Link to="/Men"><button>SHOP MEN</button></Link> 
        </div>
      </div>
      </>
  );
}

export default Home;