import React from "react";

// Context describe the data and function that will exist in the store
// This contains only the definition, NO IMPLEMENTATION here

const StoreContext = React.createContext({
  cart: [],
  user: {},

  addProduct: () => {},
  removeProduct: () => {},
});

export default StoreContext;
