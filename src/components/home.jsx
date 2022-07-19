import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home-page">
          <div className="organic-header">
            <div className="container header-titles">
              <h5>Welcome to</h5>
              <h1>The Organic Store</h1>
              <div className="start-button">
              <Link className="btn btn-primary" to="/catalog"><span>I want to be healthy, please!</span></Link>
              </div>
            </div>
          </div> 
        </div>
                 
    );
};

export default Home;