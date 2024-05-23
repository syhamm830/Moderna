import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Description from './pages/Description/Description';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import SignUp from './components/Form/SignUp';  // Add the SignUp import
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Description/:productId" element={<Description />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/signup" element={<SignUp />} />  // Add the SignUp route
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
