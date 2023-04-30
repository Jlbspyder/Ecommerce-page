import { useState, useContext } from 'react'
import {CartProvider} from "./cartContext";
import { cartContext } from "./cartContext";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MobileDropDown from "./components/MobileDropDown";
import LightBox from "./components/LightBox";


function App() {
  const basket = useContext(cartContext);
  const [mobileMenu, setMobileMenu] = useState(false)
  const [basketContainer, setBasketContainer] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null)
  const [productPix, setProductPix] = useState([
      {
        id: "1",
      image: "/images/image-product-1.jpg"
      },
      {
        id: "2",
      image: "/images/image-product-2.jpg"
      },
      {
        id: "3",
      image: "/images/image-product-3.jpg"
      },
      {
        id: "4",
      image: "/images/image-product-4.jpg"
      }
    ])
    
  
  const showMobileMenu = () => {
    setMobileMenu(mobileMenu => !mobileMenu)
  }

  const toggleDisplayCart = () => {
    setBasketContainer(basketContainer => !basketContainer);
  } 
 

  return (
    <CartProvider>
    <div className="container">
      <Header display={toggleDisplayCart}  show={showMobileMenu} />
    <div className={ `mobile-container  ${mobileMenu ? "setshow" : ""}`} >
      <MobileDropDown  show={showMobileMenu}/>
    </div>
    <div className={`basket-container ${basketContainer ? "show" : ""}`} >
      <Cart />
    </div>
      <Hero display={toggleDisplayCart} mobileMenu={mobileMenu} products={productPix} setSelectedImg={setSelectedImg}
      selectedImg={selectedImg} />
    {selectedImg && <LightBox  selectedImg={selectedImg} setSelectedImg={setSelectedImg} products={productPix} />}
    <Footer />
    </div>
    </CartProvider> 
  )
}

export default App
