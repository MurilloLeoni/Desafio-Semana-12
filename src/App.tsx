import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Qualities from "./components/qualities/Qualities"
import Shop from "./pages/shop/Shop"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      {/* <Card/> */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/product" element ={<Product />}/>
        <Route path="/cart" element ={<Cart />}/>
      </Routes>
      <Qualities/>
      <Footer/>
    </BrowserRouter>
    
  )
}
export default App