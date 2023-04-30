import { createContext, useState } from "react";
import { getProductData } from "./storeItems";


export const cartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    addOneToCart: () => {},
    deleteOneFromCart: () => {},
    deleteCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider ({children}) {
    const [cartProducts, setCartProducts] = useState([]);
  

    function getProductQuantity(id) {
         const quantity =cartProducts.find(product => product.id === id)?.quantity;
          if( quantity === undefined) {
              return 0;
            }
            return quantity;
        }
        function addToCart(id) {
            const quantity = getProductQuantity(id);
            if(quantity === 0) {
                return
            } else {
            setCartProducts(cartProducts.map(product => product.id === id ? {...product, quantity: product.quantity + 1}: product))
            }
        }

    function addOneToCart(id) {
            const quantity = getProductQuantity(id);
            if(quantity === 0) {
            setCartProducts( [...cartProducts, {
                id: id,
                quantity: 1
            }])
            } else {
            setCartProducts(cartProducts.map(product => product.id === id ? {...product, quantity: product.quantity + 1}: product))
            }
        }
 
    function deleteOneFromCart(id) {
            const quantity = getProductQuantity(id);
            if(quantity === 1) {
            deleteCart(id);
            } else {
            setCartProducts(cartProducts.map(product => product.id === id ? {...product, quantity: product.quantity - 1}: product))
            }
        }

    function deleteCart(id) {
        setCartProducts(cartProducts.filter(item => item.id !== id )
        )
    }
    function getTotalCost() {
            let totalCost = 0;
            cartProducts.map((cartItem) => {
                const productData = getProductData(cartItem.id)
                totalCost += (productData.price * cartItem.quantity)
            });
            return totalCost;
            }
        

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addToCart,
        addOneToCart,
        deleteOneFromCart,
        deleteCart,
        getTotalCost,
    }
    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>

    )
}

export default CartProvider;