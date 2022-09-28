import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { CartProvider } from "./Context/CartContext";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Cart />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Store />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
