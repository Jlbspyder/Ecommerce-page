import { cartContext } from "../cartContext";
import { useContext } from "react";
import { storeItems } from "../storeItems";


function Button({color}) {
  const product = storeItems
  const basket = useContext(cartContext);
  const productQuantity = basket.getProductQuantity(product.id)  
  const count = basket.count
  
  return (
  <div className="buttons">
    <div className="operation-buttons">
      <button className="counter-minus" onClick={() => basket.deleteOneFromCart(product.id)}>
        <img src="/images/icon-minus.svg" alt=""></img>
      </button>
      <span className="display">{productQuantity}</span>
      <button className="counter-plus" onClick={() => basket.addOneToCart(product.id)}>
        <img src="/images/icon-plus.svg" alt=""></img>
      </button>
    </div>
      <button
        onClick={() => basket.addToCart(product.id)}
        style={{ backgroundColor: color }}
        className="submit"
      >
        <img src="/images/icon-cart.svg" alt="" className="cart-2"  />
        <span className="add">Add to cart</span>
      </button> 
  </div>
  );
}

export default Button;
