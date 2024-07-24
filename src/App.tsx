import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import Qualities from "./components/qualities/Qualities"
import Card from "./components/cards/Card"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Qualities/>
      <Card/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App