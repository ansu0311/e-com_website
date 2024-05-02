// Import React for component creation
import React, { createContext, useState } from "react";

// Import product data (assuming from a separate directory)
import all_product from "../Components/Assets/all_product";

// Create a React Context for sharing shop data
export const ShopContext = createContext(null);

// Function to initialize an empty cart with quantities for all products (assuming product IDs are unique)
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[all_product[index].id] = 0; // Use product ID as key
  }
  return cart;
};

// ShopContextProvider component to manage shop state and expose it to child components
const ShopContextProvider = (props) => {
  // State variable to store cart items (quantities of each product)
  const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add an item to the cart, updating its quantity
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
// Function to remove an item from the cart, decreasing its quantity
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
// Function to calculate the total cart amount considering product prices
  const getTotalCartAmount = () => {
    let sumTotal = 0;
    all_product.map((e) => {
      let quantity = Number(cartItems[e.id]);
      let price = Number(e.new_price);
      if (quantity > 0) {
        sumTotal += quantity * price;
      }
    });
    return sumTotal;
  };

  // Function to calculate the total number of items in the cart
  const getTotalCartItem = () => {
    let quantityTotal = 0;
    all_product.map((e) => {
      quantityTotal += Number(cartItems[e.id]);
    });
    return quantityTotal;
  };

  // Function to filter and format product list based on a collection name
  const listmaking = (Collection) => {
    const list_needed = all_product.filter(obj => obj.collection === Collection).map(obj => ({
    id: obj.id,
    name: obj.name,
    category: obj.category,
    image: obj.image,
    new_price: obj.new_price,
    old_price: obj.old_price,
    collection: obj.collection,
    }))
    return list_needed;
  };

// Define the context value object containing data and functions to be shared
  const contextValue = {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
    getTotalCartItem,
    listmaking,
  };
// Wrap child components with the ShopContext.Provider, making context value available
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// Export the ShopContextProvider component for use in the application
export default ShopContextProvider;