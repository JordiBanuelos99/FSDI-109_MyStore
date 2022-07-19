import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({});

    const myAddProduct = (product) => {
        console.log("Global add prod");
        // product -> cart
        let copyCart = [...cart];
        copyCart.push(product);
        setCart(copyCart);
    };
    const myRemoveProduct = (productId) => {
        let copyCart = cart.filter(prod => prod.id != productId); // filter product with id = to product id
        setCart(copyCart);
    };

    return (
        <StoreContext.Provider
            value={{
                cart: cart,
                user: user,
                addProduct: myAddProduct,
                removeProduct: myRemoveProduct,
            }}
        >
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalState;