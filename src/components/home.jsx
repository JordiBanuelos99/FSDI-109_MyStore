import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home-page">
             <div className="organic-header">
                  <div className="container header-titles">
                    <h5>Welcome to</h5>
                    <h1>The Organic Store</h1>
                  </div>
                </div>
            <h2>It has the word "Organic" in it, so it should be healthier</h2>
            <Link className="btn btn-primary" to="/catalog">Indeed it is! let me buy, please</Link>
        </div>
                 
    );
};

export default Home;