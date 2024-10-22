Thanaboon Chantasawat 1650706367

ติดตั้ง Node.js และใช้คำสั่ง npm i -g typescript ใน cmd เพื่อติดตั้ง TypeScript บนเครื่อง
เปิด VS Code แล้วสร้างFolderใหม่
ใช้คำสั่ง tsc --init ใน cmd ของ vscode เพื่อสร้างไฟล์ tsconfig.json
ตั้งค่าใน tsconfig.json:
กำหนด "outDir": "./dist" เพื่อเก็บไฟล์ .js ที่ถูกcompileไว้ในโฟลเดอร์ dist
สร้าง folder src
เพิ่ม "include": ["src"] เพื่อcompile เฉพาะไฟล์ .ts ในโฟลเดอร์ src
สร้างไฟล์ .ts ในโฟลเดอร์ src
ใช้คำสั่ง tsc -w เพื่อคอมไพล์ TypeScript แบบเรียลไทม์
เปิด cmd ใหม่ใน vscode แล้วใช้คำสั่ง cd dist และ node <ชื่อไฟล์>.js เพื่อรันโค้ด

Part 1
  สร้าง class Product และให้มี properties
  productCount: number = 0; เก็บจำนวนสินค้า เพื่อใช้ใน totalProducts() และกำหนดเป็น private static ไว้เพื่อไม่ให้เปลี่ยนแปลงข้อมูลนอก Product ได้
  name: string; ชื่อสินค้า
  price: number; ราคาสินค้า
  category: string; หมวดหมู่

  สร้าง constructor เพื่อกำหนดค่าเริ่มต้น ของ properties
  โดยมี parameter เป็น (name: string, price: number, category: string)
  this.name = name; ให้ เป็น string
  this.price = price; ให้เป็น number
  this.category = category; ให้เป็น string
  Product.productCount++; ให้ +1 เมื่อเรียกใช้งาน totalProducts()

  สร้าง methods ใน class Product
  โดยมี updatePrice ให้คืนค่าเป็น number, อัปเดตราคาสินค้า โดยใช้ this.price = newPrice; โดยที่ newPrice เป็น number
      getProductInfo ให้คืนค่าเป็น string, return ข้อมูลสินค้า โดยทำให้ข้อมูลสินค้าเป็น string เพื่อแสดงข้อมูลตอน console.log
      totalProducts return productCount++ ให้คืนค่าเป็น number

Part 2
  สร้าง DiscountedProduct(ส่วนลด) โดยให้ extends Product มา
  และมี properties discountRate: number ที่เป็นส่วนลด (%)
  class DiscountedProduct เป็น method ในการคำนวณส่วนลด
  
  สร้าง constructor เพื่อกำหนดค่าเริ่มต้น มี parameter เป็น (name: string, price: number, category: string, discountRate: number)
  และเรียกใช้งาน super(name, price, category) จาก class Product  เพื่อกำหนดค่า name, price, category และ this.discountRate = discountRate; กำหนดค่าเป็น discountRate เป็น number

  สร้าง method getProductInfo ให้คืนค่าเป็น string ใน เพื่อแสดงข้อมูลตอน console.log 
  const discountedPrice = this.price - (this.price * this.discountRate / 100 (หาร100เพื่อทำให้เป็น %)); คำนวณราคาใหม่หลังหักค่าส่วนลด
  และ return Name: ${this.name}, Original Price: ${this.price}, Discount: ${this.discountRate}%, Final Price: ${discountedPrice}, Category: ${this.category}; เป็น string

Part 3
  สร้าง interface Customer โดยมี properties
    name: string; ชื่อลูกค้า
    email: string; อีเมลลุกค้า
    orders: Order[]; จำนวนสินค้า

    ประกาศ type Order = Product[]; เพื่อกำหนดให้ Order คือ array ของ Product 

    สร้าง function getCustomerInfo รับ parameter customer: Customer โดยคืนค่าเป็น string เพื่อแสดงข้อมูลตอน console.log
    return Name: ${customer.name}, Age: ${customer.email} Orders: ${customer.orders.length}(.lenght เพื่อหาค่าความยาวของ array);

Part 4
  สร้าง class Inventory<T> ไว้เก็บข้อมูล ของ Product ใส่ <T> เพื่อให้เก็บข้อมูลเป็นอะไรก็ได้ (generics) โดย T จะใช้แทน Inventory
  โดยมี properties private items: T[] = []; เป็น array ของ T ที่เก็บรายการ ของ items ประกาศเป้น private เพื่อไม่ให้ค่าเปลี่ยนแปลงนอก class
  และมี methods addItem(item: T) ในการเพิ่มสินค้าเข้า inventory ไม่ต้องคืนค่าอะไรเลย 
    มี this.items.push(item); ในการ push ค่าที่ได้จาก parameter ไปที่ array ของ items
  และ listItems() ในการคืนค่า array ของ items ใช้ตอน console.log
    return this.items;

Part 5
  สร้าง function createPriceMultiplier โดยรับ parameter multiplier เป็น number
    และ return function ที่รับ paramenter price เป็น number
      แล้ว return price * multiplier; เป็นการเพิ่มราคาสินค้าเป็นเท่าตัว

Part 6
  สร้าง function โดยประกาศเป็น sync คืนค่าเป็น Promise<void> ทำให้ค่าเป็น undefined
  
  function simulateApiCall เป็นการจำลองการเรียกใช้งาน API โดยจะคืนค่าเป็น Promise ที่มี obj name: string ชื่อสินค้า, price: number ราคาสิรค้า, category: string หมวดหมุ่สินค้า

  return new return new Promise((resolve, reject) รับ parameter resolve ใช้เพื่อส่งค่าผลลัพธ์เมื่อการทำงานสำเร็จ, reject ใช้เพื่อส่งค่าข้อผิดพลาดเมื่อเกิดปัญหา

  setTimeout จำลองการรอผลลัพธ์จาก API , 2000 คือการกำหนดเพื่อรอ 2วิ

  const success = true; สมมุติว่าเรียกสำเร็จ
  if (success) {
    resolve({ name: "Smartwatch", price: 199.99, category: "Wearables" }); ถ้าเรียกสำเร็จจะเรียกใช้งาน resolve
  } else {
    reject("Failed to fetch product data"); ถ้าเรียกไม่สำเร็จจะเรียกใช้งาน reject
  }

  ใช้ try catch เพื่อจัดการ error จากการเรียก API
  try {
    const productData = await simulateApiCall(); รอให้ simulateApiCall ทำงานเสร็จ แล้วเก็บไว้ใน productData
    console.log("Product Data:", productData);
  } catch (error) { กรณีเกิด error
      console.error("Error:", error);
  }

Part 7

  สร้าง function filterProductsAbove100 คือ การแยกว่า สินค้าอะไรบ้างที่ price มากกว่า 100 โดยรับ parameter products: Product[] และคือค่าเป็น Product[] ที่เป็น array ของ       
  Product[] ที่ผ่านการ filter แล้ว
    return products.filter(product => product.price > 100); ใช้ filter สร้าง array ใหม่ และ ตรวจสอบว่า price > 100 มั้ย ถ้ามากกว่าให้คืนค่าไปที่ Product[] ที่เป็น array ใหม่

  สร้าง function getProductNames เพื่อดึงชื่อสินค้าทั้งหมด ใน products: Product[] ออกมาแล้วคืนค่าเป็น string[]
    return products.map(product => product.name); ใช้ map สร้าง array ใหม่ โดยดึงข้อมูลจาก product.name ไปใน string[]

  สร้าง function calculateTotalCost เพื่อคำนวณราคาสินค้าทั้งหมด โดยรับค่า products: Product[] และคืนค่า number
    return products.reduce((total, product) => total + product.price, 0); ใช้ reduce ทำให้ array เป็นค่าเดียว และนำ total ไป + กับ product.price โดยที่ total เป็น 0 และ คืนค่าไปเป็น number

Part 8

  สร้างfunction parseProductData รับ parameter เป็น jsonData: string ที่คาดว่าจะมีข้อมูลเกี่ยวกับสินค้า
  ใช้ try catch
    const productData = JSON.parse(jsonData); เพื่อแปลงstring JSON เป็นobj JavaScript หากข้อมูลเป็น JSON ที่ถูกต้อง

    if (productData.name && productData.price && productData.category) { ตรวจสอบว่าข้อมูลที่แปลงมา (productData) มี name, price, และ category มั้ย
            return new Product(productData.name, productData.price, productData.category); ถ้ามี คุณจะสร้างobjใหม่ของ Product โดยใช้ค่าที่ได้จาก productData และคืนค่ากลับ
        } else {
            throw new Error("Invalid product data"); ถ้าไม่มีค่าที่จำเป็น จะโยนerrorใหม่ด้วยข้อความ "Invalid product data"
        } catch (error) { หากมีerrorเกิดขึ้นระหว่างการแปลง JSON หรือการตรวจสอบข้อมูล
        if (error instanceof Error) { ตรวจสอบว่าerrorที่เกิดขึ้นเป็นประเภท Error หรือไม่
            return `Error parsing product data: ${error.message}`; ถ้าใช่ คืนค่าข้อความที่บอกว่ามีerrorเกิดขึ้นในระหว่างการแปลงข้อมูล
        } else {
            return "Unknown error occurred"; ถ้าไม่ใช่ คืนค่าข้อความ "Unknown error occurred"
        }
    }
