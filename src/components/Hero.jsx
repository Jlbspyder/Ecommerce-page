import { Fragment } from "react";
import Button from "./Button";
import { cartContext } from "../cartContext";
import { useContext, useState } from "react";
import { storeItems } from "../storeItems";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

function Hero({ products, setSelectedImg, selectedImg }) {
  const basket = useContext(cartContext);
  const [current, setCurrent] = useState(0);
  const length = products.length;

  const handlePrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <main>
      <div className="hero">
        <div className="product">
          {products.map((pix, index) => {
            return (
              <div
                className="product"
                key={index}
                onClick={() => setSelectedImg(pix.image)}
              >
                {index === current && (
                  <img src={pix.image} alt="" className="item-show" />
                )}
              </div>
            );
          })}
          <div className="thumbnail">
            {products.map((pix, index) => (
              <img
                style={{
                  border:
                    index === current ? "2px solid hsl(26, 100%, 55%" : "",
                  opacity: index === current ? "70%" : "",
                }}
                key={index}
                src={pix.image}
                className="pix"
                alt=""
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
        <div className="mobile-product">
          {products.map((pix, index) => {
            return (
              <div
                className={index === current ? "mobile-product" : ""}
                key={index}
              >
                {index === current && (
                  <img src={pix.image} alt="" className="mobile-item-show" />
                )}
              </div>
            );
          })}
          <div className="mobile-nextArrow">
            <FaGreaterThan className="mobile-next" onClick={handleNext} />
          </div>
          <div className="mobile-previousArrow">
            <FaLessThan className="mobile-previous" onClick={handlePrevious} />
          </div>
        </div>
        <div className="mobile-display">
          <h4>SNEAKER COMPANY</h4>
          {storeItems.map((product) => (
            <Fragment key={product.id}>
              <h1> {product.title} </h1>
              <p className="big-screen-description">
                These low-profile sneakers are your perfect casual wear
                <br />
                companion. Featuring a durable rubber outer sole, they'll
                <br /> withstand everything the weather can offer.
              </p>
              <p className="small-screen-description">
                These low-profile sneakers are your perfect
                <br /> casual wear companion. Featuring a durable <br />
                rubber outer sole, they'll withstand everything <br />
                the weather can offer.
              </p>
              <div className="price">
                <h2>
                  ${product.price.toFixed(2)}
                  <span id="discount">50%</span>
                </h2>
                <p className="sale-price">${product.oldPrice.toFixed(2)}</p>
              </div>
            </Fragment>
          ))}

          <Button color="hsl(26, 100%, 55%)" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
