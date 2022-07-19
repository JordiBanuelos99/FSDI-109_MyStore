import { useContext } from "react";
import "./productinCart.css";
import StoreContext from "../context/storeContext";

const ProductInCart = (props) => {
    const removeProduct = useContext(StoreContext).removeProduct;
    
    const getTotal = () => {
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    }
    const handleRemove = () => {
        removeProduct(props.data.id); //send the product Id
    };

    return (
        <div className="product-cart">
            <img src={"/img/" + props.data.image} alt=""/>
            <div className="info">
                <h5 className="col-head">{props.data.title}</h5>
                <p>{props.data.category}</p>
            </div>
            <div className="price">
                <label className="col-head">Price</label>
                <label>${props.data.price.toFixed(2)}</label>
            </div>
            <div className="quantity">
                <label className="col-head">Quantity</label>
                <label>{props.data.quantity}</label>
            </div>
            <div className="total">
                <label className="col-head">Total</label>
                <label>${getTotal()}</label>
            </div>
            <button onClick={handleRemove} className="btn btn-sm btn-danger">Remove</button>
        </div>
    );
};

export default ProductInCart;
