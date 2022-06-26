import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = () => {
    return(
        <div className="product">
            <img src="https://www.greenqueen.com.hk/wp-content/uploads/2019/08/79DDB337-9104-4282-A9E7-48846087A304.jpeg" alt="" />
                <h5>My Product</h5>
                <QuantityPicker></QuantityPicker>
                <label>Price: $20.00</label>
                <label>Total: $30.00</label>
            <button className="btn btn-success rounded-pill">Add to Cart</button>
        </div>
    );
}

export default Product;