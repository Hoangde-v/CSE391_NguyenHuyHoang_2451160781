User Directory

Ứng dụng CRUD danh sách users dùng API.

API đã dùng
JSONPlaceholder API

Base URL:

https://jsonplaceholder.typicode.com

Endpoints:

GET    /users
GET    /users/:id
POST   /users
PUT    /users/:id
DELETE /users/:id

Ví dụ:

https://jsonplaceholder.typicode.com/users

Lưu ý:

JSONPlaceholder là fake REST API

POST/PUT/DELETE mô phỏng request thành công nhưng không lưu dữ liệu thật lên server.

Tính năng
READ user list
CREATE user
UPDATE user
DELETE user
SEARCH theo:
name
email
Skeleton loading
Toast success/error
Cách chạy project
1. Mở folder project
user_directory/
2. Chạy bằng Live Server

Trong VS Code:

Right click index.html
Chọn:
Open with Live Server
Cấu trúc project
user_directory/
│── index.html
│── style.css
│── app.js
│── README.md