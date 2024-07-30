import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Qualities from "./components/qualities/Qualities";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Register from "./pages/login/Register";
import Login from "./pages/login/Login";
import Provider from "./contexts/Provider";
import ProductPage from "./pages/product/Product";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Qualities />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
