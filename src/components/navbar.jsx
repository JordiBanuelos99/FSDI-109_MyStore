import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

function Navbar(){
    let cart = useContext(StoreContext).cart;

    return (
        <div className="navbar navbar-expand-lg sticky-top navbar-light bg-success text-white">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home"><img src="https://i.ibb.co/2F4m6QM/Website-logo-nav.png" width="100px"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/catalog">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin page</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                    <span className="badge bg-secondary">{cart.length}</span>
                        My Cart
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;