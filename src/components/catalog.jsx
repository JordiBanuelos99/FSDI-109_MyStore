import "./catalog.css";
import Product from "./product";

const Catalog = () => {
    return(
        <div className="catalog">
            <h2>This is our amazing catalog</h2>
            <h3>We have # products!</h3>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;