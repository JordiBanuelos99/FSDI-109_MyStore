import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";
import ProductinCart from "./productinCart";

const Cart = () => {
    let cart = useContext(StoreContext).cart;

    const getCount = () => {
        let count = 0;
        // travel the array sum the quantity of each product into count
        for (let i = 0; i <cart.length; i++){
            count +=  cart[i].quantity;
            console.log(cart[i]);
        }
        // return count
        return count;
    }

    const getTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++){
            let prod = cart[i];
            total += prod.price * prod.quantity;
        }
        return total;
    }
    return (
        <div className="cart-page">
            <div className="cart-header">
            <h2>Ready to pay for {getCount()} items?</h2>
            </div>
            <div className="parent">
                <section className="list">
                    {cart.map((prod) => (
                        <ProductinCart key={prod.id} data={prod}> </ProductinCart>
                        ))
                    }
                </section>
                <section className="info">
                    <h5>Total</h5>
                    <p>${(getTotal()).toFixed(2)}</p>
                </section>
            </div>
        </div>
    );
};

export default Cart;