# Praca domowa, cz. 2

zadanie umieszczone na [stackblitz](https://stackblitz.com/edit/oo-ts-refactor-exercise)

## Tresc:
```javascript
/**
 * The goal here is to:
 * - make it in 'Object Oriented' manner (use classes)
 * - use types
 * - split code into modules (files)
 */

/**
 * Create list of products
 */
const products = [];
const product1 = {
  name: "Bread",
  price: 1
};
const product2 = {
  name: "Milk",
  price: 2
};
products.push(product1);
products.push(product2);
/**
 * Create address
 */
const address = {
  streetName: "Saturna",
  postCode: 1222,
  country: "Poland"
};

/**
 * Calculate total price
 */
const productsPrice = products.reduce((acc, product) => {
  return acc + product.price;
}, 0);
const shippingPrice = 10;
const totalPrice = productsPrice + shippingPrice;

const order = {
  products,
  address,
  totalPrice
};

/**
 * Making order
 */
console.log("----------------Order summary-------------");
console.log("Shipping address:", order.address);
console.log("Products list:", order.products);
console.log("Total order price: " + order.totalPrice);
```
