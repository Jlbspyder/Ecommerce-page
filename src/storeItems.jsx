const storeItems = [
    {
        id: "1",
    title: "Fall Limited Edition Sneakers",
    price: 125,
    oldPrice: 250,
    image: "/images/image-product-1-thumbnail.jpg",
    }
]

function getProductData(id) {
        let productData = storeItems.find(product => product.id === id);
        if(productData === undefined) {
          return
        }
        return productData;
      } 

export {storeItems, getProductData};