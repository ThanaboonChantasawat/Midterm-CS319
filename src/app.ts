// Part 1

class Product {
    private static productCount: number = 0;
    name: string;
    price: number;
    category: string;

    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
        Product.productCount++;
    }

    updatePrice(newPrice: number): void {
        this.price = newPrice;
    }

    getProductInfo(): string {
        return `Name: ${this.name}, Price: ${this.price}, Category: ${this.category}`;
    }

    totalProducts(): number {
        return Product.productCount;
    }
}

// Part 2

class DiscountedProduct extends Product {
    discountRate: number;

    constructor(name: string, price: number, category: string, discountRate: number) {
        super(name, price, category);
        this.discountRate = discountRate;
    }

    getProductInfo(): string {
        const discountedPrice = this.price - (this.price * this.discountRate / 100);
        return `Name: ${this.name}, Original Price: ${this.price}, Discount: ${this.discountRate}%, Final Price: ${discountedPrice}, Category: ${this.category}`;
    }
}

// Part 3

interface Customer{
    name: string;
    email: string;
    orders: Order[];
}

type Order = Product[];

function getCustomerInfo(customer: Customer): string {
    return `Name: ${customer.name}, Age: ${customer.email} Orders: ${customer.orders.length}`;
}


// Part 4

class Inventory<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    listItems(): T[] {
        return this.items;
    }
}

// Part 5

function createPriceMultiplier(multiplier: number){
    return function(price: number){
        return price * multiplier;
    }
}

// Part 6 ใช้ copilot ทำส่วนใหญ่

async function fetchProductData(): Promise<void> {
    const simulateApiCall = (): Promise<{ name: string, price: number, category: string }> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true; // Simulate success or failure
                if (success) {
                    resolve({ name: "Smartwatch", price: 199.99, category: "Wearables" });
                } else {
                    reject("Failed to fetch product data");
                }
            }, 2000);
        });
    };

    try {
        const productData = await simulateApiCall();
        console.log("Product Data:", productData);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Part 7

function filterProductsAbove100(products: Product[]): Product[] {
    return products.filter(product => product.price > 100);
}

function getProductNames(products: Product[]): string[] {
    return products.map(product => product.name);
}

function calculateTotalCost(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Part 8 ใช้ copilot ทำส่วนใหญ่

function parseProductData(jsonData: string): Product | string {
    try {
        const productData = JSON.parse(jsonData);
        if (productData.name && productData.price && productData.category) {
            return new Product(productData.name, productData.price, productData.category);
        } else {
            throw new Error("Invalid product data");
        }
    } catch (error) {
        if (error instanceof Error) {
            return `Error parsing product data: ${error.message}`;
        } else {
            return "Unknown error occurred";
        }
    }
}

