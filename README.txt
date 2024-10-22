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
