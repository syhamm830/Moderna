import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Description from './pages/Description/Description';
import Shopping from './pages/Shopping/Shopping';
import SignUp from './components/Form/SignUp';
import NotFound from "./components/NotFound";
import Checkout from "./pages/Checkout/Checkout";
import AdminLayout from './components/Admin/AdminLayout/AdminLayout';
import Dashboard from './components/Admin/Dashboard/dashboard';
import Products from './pages/Admin/Products/Products';
import CreateProduct from './pages/Admin/Products/CreateProduct';
import EditProduct from './pages/Admin/Products/EditProduct';
import Users from './pages/Admin/Users/Users';
import Orders from './pages/Admin/Orders/Orders';
import Statistics from './pages/Admin/Statistics/Statistics';
import { CartProvider } from './components/cartcontext';
import './App.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <ToastContainer />
                <Navbar />
                <Routes>
                    {/* User Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/description/:productId" element={<Description />} />
                    <Route path="/shop" element={<Shopping />} />
                    <Route path="/women" element={<Shopping category="Women" />} />
                    <Route path="/men" element={<Shopping category="Men" />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/not-found" />} />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route path="products/create" element={<CreateProduct />} />
                        <Route path="products/edit/:id" element={<EditProduct />} />
                        <Route path="users" element={<Users />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="statistics" element={<Statistics />} />
                    </Route>
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
