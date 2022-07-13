import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import MyCart from "./components/mycart";
import Admin from "./components/admin";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/mycart" element={<MyCart></MyCart>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
