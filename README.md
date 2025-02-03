# Ownego JS Dev Test

## 🚀 Project Overview
Đây là một ứng dụng web nhỏ giúp quản lý các quán trà sữa tại Nam Đồng. Ứng dụng hiển thị danh sách quán, menu các loại trà sữa và hỗ trợ lọc, sắp xếp theo các tiêu chí khác nhau.

## 📂 Folder Structure
```
project-root/
├── data/                 # Chứa dữ liệu JSON về các cửa hàng, sản phẩm, menu
│   ├── products.json
│   ├── storeProducts.json
│   ├── stores.json
├── src/                  # Source code chính
│   ├── components/       # Chứa các component React
│   ├── pages/            # Chứa các trang chính của ứng dụng
│   ├── App.js            # Entry chính
│   ├── index.js          # Render ứng dụng vào DOM
├── server/               # Mock API server (Node.js + Express)
│   ├── server.js         # Backend server API
├── public/               # Assets tĩnh
├── package.json          # Dependencies & Scripts
├── README.md             # Hướng dẫn cài đặt và sử dụng
```

## ✨ Features
✅ Hiển thị danh sách quán trà sữa từ dữ liệu JSON.
✅ Hiển thị menu đồ uống của từng cửa hàng.
✅ Hỗ trợ **sắp xếp (Sort)** theo:
   - Tên (A → Z, Z → A)
   - Giá (Thấp → Cao, Cao → Thấp)
✅ Hỗ trợ **lọc (Filter) theo topping** như yêu cầu UI 1b.
✅ **Responsive** theo các breakpoints: `768px`, `360px`.
✅ **Sidebar có thể mở/đóng** trên mobile.
✅ **Mock API Backend** bằng `Node.js` + `Express`.

## 🛠️ Installation & Setup
### 1️⃣ Clone Project
```sh
git clone https://github.com/trungvu2011/ownego-js-test.git
cd ownego-dev-test
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start Mock API Server
```sh
cd backend
node server.js
```
> **Server chạy trên**: `http://localhost:8080`

### 4️⃣ Start React App
```sh
npm run dev
```
> **Ứng dụng chạy trên**: `http://localhost:5173`|

## 📝 Author
**Vũ Đức Trung**
- Email: your.email@example.com
- GitHub: [your-username](https://github.com/your-username)
- LinkedIn: [Your Profile](https://linkedin.com/in/your-profile)

---
Made with ❤️ by Vũ Đức Trung 🚀

