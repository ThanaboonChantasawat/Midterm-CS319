"use strict";
// Part 1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
        Product.productCount++;
    }
    updatePrice(newPrice) {
        this.price = newPrice;
    }
    getProductInfo() {
        return `Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    }
    totalProducts() {
        return Product.productCount;
    }
}
Product.productCount = 0;
// Part 2
class DiscountedProduct extends Product {
    constructor(name, price, category, discountRate) {
        super(name, price, category);
        this.discountRate = discountRate;
    }
    getProductInfo() {
        const discountedPrice = this.price - (this.price * this.discountRate / 100);
        return `Name: ${this.name}, Original Price: ${this.price}, Discount: ${this.discountRate}%, Final Price: ${discountedPrice}, Category: ${this.category}`;
    }
}
function getCustomerInfo(customer) {
    return `Name: ${customer.name}, Age: ${customer.email} Orders: ${customer.orders.length}`;
}
// Part 4
class Inventory {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    listItems() {
        return this.items;
    }
}
// Part 5
function createPriceMultiplier(multiplier) {
    return function (price) {
        return price * multiplier;
    };
}
// Part 6 ใช้ copilot ทำส่วนใหญ่
function fetchProductData() {
    return __awaiter(this, void 0, void 0, function* () {
        const simulateApiCall = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = true; // Simulate success or failure
                    if (success) {
                        resolve({ name: "Smartwatch", price: 199.99, category: "Wearables" });
                    }
                    else {
                        reject("Failed to fetch product data");
                    }
                }, 2000);
            });
        };
        try {
            const productData = yield simulateApiCall();
            console.log("Product Data:", productData);
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
// Part 7
function filterProductsAbove100(products) {
    return products.filter(product => product.price > 100);
}
function getProductNames(products) {
    return products.map(product => product.name);
}
function calculateTotalCost(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
// Part 8 ใช้ copilot ทำส่วนใหญ่
function parseProductData(jsonData) {
    try {
        const productData = JSON.parse(jsonData);
        if (productData.name && productData.price && productData.category) {
            return new Product(productData.name, productData.price, productData.category);
        }
        else {
            throw new Error("Invalid product data");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return `Error parsing product data: ${error.message}`;
        }
        else {
            return "Unknown error occurred";
        }
    }
}
