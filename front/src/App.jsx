import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Product from "./Components/Product/Product";
import "./App.css"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;