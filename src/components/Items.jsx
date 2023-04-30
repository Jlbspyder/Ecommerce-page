import { cartContext } from "../cartContext";
import { useContext } from "react";
import { getProductData } from "../storeItems";

function Items({ id, productQuantity}) {
  const basket = useContext(cartContext);
  const productData = getProductData(id)
 

  return (
    <>
      {productQuantity === 0 ? <p className="msg"> Your cart is empty.</p> : <div className="basket">
        <img
          src={productData.image}
          alt=""
          style={{
            width: "40px",
            borderRadius: "4px",
            marginTop: "8px",
            marginLeft: "10px",
          }}
        />
        <p className="basket-id">
          {productData.title}
          <br />${productData.price.toFixed(2)} x {productQuantity}{" "}
          <span style={{ fontWeight: "800", fontSize: "10px", color: "black", background: "white" }}>
            {" "}
          <span id="bold"> ${productData.price * productQuantity}{".00"} </span>
          </span>
        </p>
        <img
          src="/images/icon-delete.svg"
          id="delete-basket"
          alt=""
          onClick={() => basket.deleteCart()}
          style={{
            width: "15px",
            height: "20px",
            marginTop: "18px",
            marginRight: "10px",
            // paddingRight: "5px",
            cursor: "pointer",
          }}
        ></img>
      </div> }
      
    </>
  );
};

export default Items;