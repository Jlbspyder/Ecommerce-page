import Items from "./Items";
import CartHeader from "./CartHeader";
import {storeItems} from "../storeItems"
import { cartContext } from "../cartContext";
import { useContext } from "react";

const Cart = () => {
  const basket = useContext(cartContext);
  const product = storeItems
  const productQuantity = basket.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );  
  return (
    <div>
      <CartHeader />
      {product.map((item, idx) => (
        <Items key={idx} id={item.id} productQuantity={productQuantity} />
      ))}
      {productQuantity === 0 ? "" : <button className="cart-button">Checkout</button>}
    </div>
  );
};

export default Cart;