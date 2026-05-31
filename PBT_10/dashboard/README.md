Multi API Dashboard

Dashboard tổng hợp dữ liệu từ nhiều API khác nhau.

APIs đã dùng
Random User API

Endpoint:

https://randomuser.me/api/

Dùng để:

Lấy user ngẫu nhiên
Open-Meteo API

Endpoint:

https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true

Dùng để:

Lấy thời tiết hiện tại Hà Nội
Dog API

Endpoint:

https://dog.ceo/api/breeds/image/random

Dùng để:

Lấy ảnh chó ngẫu nhiên
Tính năng
Gọi song song nhiều APIs
Promise.allSettled()
Loading tổng thể
Widget riêng từng API
Error riêng từng widget
Refresh All
Hiển thị thời gian fetch
Cách chạy project
1. Mở folder
dashboard/
2. Chạy bằng Live Server

Trong VS Code:

Right click:
index.html
Chọn:
Open with Live Server
Cấu trúc project
dashboard/
│── index.html
│── style.css
│── app.js
│── README.md