import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

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

  const getTotalCartItem = () => {
    let quantityTotal = 0;
    all_product.map((e) => {
      quantityTotal += Number(cartItems[e.id]);
    });
    return quantityTotal;
  };

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

  const contextValue = {
    all_product,
    cartItems,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
    getTotalCartItem,
    listmaking,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
