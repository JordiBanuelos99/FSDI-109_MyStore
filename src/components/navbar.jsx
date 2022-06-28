import "./navbar.css"

function Navbar(){
    return (
        <div className="navbar navbar-expand-lg sticky-top navbar-light bg-success text-white">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src="https://i.ibb.co/2F4m6QM/Website-logo-nav.png" width="100px"/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">My Cart</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;