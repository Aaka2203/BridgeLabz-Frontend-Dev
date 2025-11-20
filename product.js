// product.js

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100);
  }

  getDetails() {
    return `ID: ${this.id} | ${this.name} | Rs ${this.price} | Category: ${this.category}`;
  }
}

// creating products
const products = [
  new Product(1, "Laptop", 45000, "Electronics"),
  new Product(2, "Keyboard", 850, "Accessories"),
  new Product(3, "Shoes", 1200, "Fashion")
];

// apply discount to one product
products[0].applyDiscount(10);

console.log("Products > 1000:");
console.log(products.filter(p => p.price > 1000));
