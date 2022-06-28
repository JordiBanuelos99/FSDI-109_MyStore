import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    console.log(props);
    return(
        <div className="product">
            <img src={"/img/" + props.data.image} alt="" />
                <h5>{props.data.title}</h5>
                <QuantityPicker></QuantityPicker>
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${}</label>
            <button className="btn btn-success rounded-pill">Add to Cart</button>
        </div>
    );
}

export default Product;