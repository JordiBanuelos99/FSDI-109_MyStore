import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="organic-header">
        <div className="container header-titles">
          <h5>Welcome to</h5>
          <h1>The Organic Store</h1>
        </div>
      </div>
      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;
