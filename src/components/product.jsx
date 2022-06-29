import "./product.css";
import {useState} from "react";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    let [quantity, setQuantity]=useState(1);

    const quantityChange = (val) => {
        setQuantity(val);
    };

    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }
    return(
        <div className="product">
            <img src={"/img/" + props.data.image} alt="" />
                <h5>{props.data.title}</h5>
                <QuantityPicker onChange={quantityChange}></QuantityPicker>
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
            <button className="btn btn-success rounded-pill">Add to Cart</button>
        </div>
    );
}

export default Product;