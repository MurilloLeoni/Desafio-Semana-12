import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App