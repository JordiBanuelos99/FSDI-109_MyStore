import "./product.css";
import QuantityPicker from "./quantityPicker";
import {useState, useContext} from "react";
import StoreContext from "./../context/storeContext";

const Product = (props) => {
    let [quantity, setQuantity]=useState(1);
    let globalAddProd = useContext(StoreContext).addProduct;

    const quantityChange = (val) => {
        setQuantity(val);
    };

    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    const handleAdd = () => {
        /* Should be a copy of props.data */
        let prod4Cart = {...props.data, quantity: quantity};
        prod4Cart.quantity = quantity;

        globalAddProd(prod4Cart); //call the global function
    }


    return(
        <div className="product">
            <img src={"/img/" + props.data.image} alt="" />
                <h5>{props.data.title}</h5>
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${getTotal()}</label>
                <QuantityPicker onChange={quantityChange}></QuantityPicker>
            <button onClick={handleAdd} className="btn btn-success rounded-pill">Add to Cart</button>
        </div>
    );
}

export default Product;