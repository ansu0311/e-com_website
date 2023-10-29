import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import add_icon from "../Assets2/plus.png";
import remove_icon from "../Assets2/minus.png";

const CartItems = () => {
  const {all_product, cartItems, addToCart, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

  let subtotal = getTotalCartAmount();

  const TotalBill = (subtotal) => {
    if (subtotal >= 1000) {
      return subtotal;
    } else {
      return (subtotal + 199);
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <p>{e.size}</p>
                <p>{cartItems[e.id]}</p>
                <p>${e.new_price * cartItems[e.id]}</p>
                <p className="cart_buttons">
                <img className="cartitems-remove-icon" src={add_icon} onClick={() => {addToCart(e.id);}} alt=""/>
                <img className="cartitems-remove-icon" src={remove_icon} onClick={() => {removeFromCart(e.id);}} alt=""/>
                </p>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Total</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${subtotal}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shopping Fee</p>
                    <p>{subtotal > 1000 ? "Free" : 199}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${TotalBill(subtotal)}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>if you have promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
