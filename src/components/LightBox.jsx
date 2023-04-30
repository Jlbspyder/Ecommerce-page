import { FaTimes, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useState } from "react";

const LightBox = ({ products, selectedImg, setSelectedImg }) => {
  const [current, setCurrent] = useState(0);
  const length = products.length;

  const handlePrevious = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <div className="light-box">
        {products.map((pix, index) => {
          return (
            <div className={index === current ? "light-box" : ""} key={index}>
              {index === current && (
                <img src={pix.image} alt="" className="lightbox-img" />
              )}
            </div>
          );
        })}
        <div className="thumbnail-lightbox">
          {products.map((pix, index) => (
            <img
              style={{
                border:
                  index === current ? "2px solid hsl(26, 100%, 55%) " : "",
                opacity: index === current ? "50%" : "",
              }}
              key={index}
              src={pix.image}
              id="thumbnail-pix"
              alt=""
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
      <div className="close-button">
        <FaTimes
          className="close-lightbox"
          onClick={() => setSelectedImg(null)}
        />
      </div>
      <div className="nextArrow">
        <FaGreaterThan className="next" onClick={handleNext} />
      </div>
      <div className="previousArrow">
        <FaLessThan className="previous" onClick={handlePrevious} />
      </div>
    </>
  );
};
export default LightBox;
