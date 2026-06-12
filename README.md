# 🛒 Shopping Online Backend API

Backend API cho hệ thống thương mại điện tử được xây dựng bằng Node.js, Express.js, Prisma ORM, PostgreSQL và Swagger Documentation.

## 🚀 Công nghệ sử dụng

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* JWT Authentication
* Swagger UI Express
* Swagger JSDoc
* Cloudinary
* Nodemailer
* Multer
* BcryptJS

---

## ✨ Chức năng

### Authentication

* Register
* Login
* Refresh Token
* Logout
* Change Password

### Product Management

* Create Product
* Update Product
* Delete Product
* Get Product Detail
* Search Product

### Category Management

* Create Category
* Update Category
* Delete Category

### Cart Management

* Add To Cart
* Update Cart
* Remove Item

### Order Management

* Create Order
* Payment
* Order History
* Update Order Status

### User Management

* Profile
* Update Information
* Upload Avatar

---

## 📚 API Documentation

Swagger UI được tích hợp để kiểm tra API trực tiếp trên trình duyệt.

Sau khi chạy server:

```bash
npm run dev
```

Truy cập:

```txt
http://localhost:3000/api-docs
```

Swagger Documentation bao gồm:

* Authentication APIs
* User APIs
* Product APIs
* Category APIs
* Cart APIs
* Order APIs
* Review APIs

---

## ⚙️ Installation

Clone project:

```bash
git clone https://github.com/nhphison19-cpu/BackEnd-Project-Shopping-Online.git
```

Install dependencies:

```bash
npm install
```

---

## 🔧 Environment Variables

Tạo file `.env`

```env
PORT=3000

DATABASE_URL=

ACCESS_TOKEN_SECRET=

REFRESH_TOKEN_SECRET=

CLOUDINARY_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

## 🗄️ Database Migration

Generate Prisma Client:

```bash
npx prisma generate
```

Migration:

```bash
npx prisma migrate dev
```

Prisma Studio:

```bash
npx prisma studio
```

---

## ▶️ Run Application

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

---

## 🔐 Authentication

Protected APIs yêu cầu Access Token:

```http
Authorization: Bearer <token>
```

---

## 📂 Project Structure

```txt
src
├── controller
├── middleware
├── prisma
├── routes
├── service
├── utils
├── swagger
└── server.js
```

---

## 👨‍💻 Author

Nguyễn Phi Sơn

GitHub: https://github.com/nhphison19-cpu
