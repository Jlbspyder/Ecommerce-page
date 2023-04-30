import { useContext } from "react";
import { cartContext } from "../cartContext";
import { storeItems } from "../storeItems";

const Header = ({display, show}) => {
    const product = storeItems
    const basket = useContext(cartContext);
    const productQuantity = basket.getProductQuantity(product.id) 
  
    return (
    <div className="navbar">
    <div className="desktop mobile-head">
    <div className="flexbox">
      <div className="hamburger-menu">
        <img src="./images/icon-menu.svg" alt='' className="icon-menu" onClick={show} />
        <h3>sneakers</h3>
        {/* <img src="./images/logo.svg" alt='' className="logo mobile-logo" /> */}
      </div>
        <ul className="menu">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </div>
    <div className="flexbox2">
      <div className="mobile-menu">
        <img src="/images/icon-cart.svg"  alt="" className="cart" onClick={display} />
        {productQuantity === 0 ? "" : <span
          className="on"
          style={{
            backgroundColor: "orange",
            color: "white",
            height: "13px",
            width: "12px",
            fontSize: "10px",
            marginLeft: "7px",
            marginTop: "0",
            borderRadius: "50%",
          }}
        >
          {productQuantity}
        </span>}
      </div>
        <img src="/images/image-avatar.png"  alt="" className="avatar" />
    </div>
      </div>
    </div>
)}

export default Header
