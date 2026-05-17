Câu A1 (10đ) — 5 Loại Positioning

1.  static

- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: Theo flow mặc định của tài liệu
- Cuộn theo trang: \Có
- Use case: Layout mặc định của trang

2.  relative

- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: So với vị trí ban đầu của chính nó
- Cuộn theo trang: Có
- Use case: Dịch chuyển nhẹ phần tử hoặc làm mốc cho phần tử absolute

3.  absolute

- Vẫn chiếm chỗ trong flow: Không
- Tham chiếu vị trí: Ancestor gần nhất có position khác static
- Cuộn theo trang: Có
- Use case: Tooltip, badge, dropdown, popup nhỏ

4.  fixed

- Vẫn chiếm chỗ trong flow: Không
- Tham chiếu vị trí: Viewport (màn hình trình duyệt)
- Cuộn theo trang: Không
- Use case: Navbar cố định, nút back-to-top

5.  sticky

- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: Ban đầu theo flow, sau đó bám viewport khi đạt ngưỡng
- Cuộn theo trang: Một phần
- Use case: Sticky header, menu hoặc sidebar cố định khi cuộn

- absolute sẽ tham chiếu body (hoặc viewport) khi không tồn tại ancestor nào có position khác static.

Trong trường hợp này .child sẽ định vị theo body/viewport.

Khi nào absolute tham chiếu parent?

absolute sẽ tham chiếu tới ancestor gần nhất có position khác static, ví dụ:

- relative
- absolute
- fixed
- sticky

Khi đó .child sẽ được định vị theo .parent.

Khái niệm nearest positioned ancestor:
nearest positioned ancestor là:

> Phần tử tổ tiên gần nhất có position khác static.

Câu A2 (10đ) — Flexbox vs Grid
/_ Trường hợp 1 _/
.container { display: flex; }
.item { flex: 1; }

Có 4 item.
Bố cục:

- display: flex mặc định là sắp xếp theo hàng ngang (flex-direction: row)
- flex: 1 nghĩa là các item chia đều không gian

Kết quả: 1 hàng, 4 cột bằng nhau

Sơ đồ bố cục:

text
+-------+-------+-------+-------+
| item1 | item2 | item3 | item4 |
+-------+-------+-------+-------+

---

/_ Trường hợp 2 _/
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
Có 6 item.

Bố cục:

- flex-wrap: wrap cho phép xuống dòng
- mỗi item rộng 45%
- margin trái phải tổng cộng khoảng 5%
- một item gần bằng 50% chiều ngang

=> mỗi hàng chứa khoảng 2 item

Kết quả: 3 hàng, 2 cột

Sơ đồ bố cục:

text
+-------+-------+
| item1 | item2 |
+-------+-------+

+-------+-------+
| item3 | item4 |
+-------+-------+

+-------+-------+
| item5 | item6 |
+-------+-------+

---

/_ Trường hợp 3 _/
.container { display: flex; justify-content: space-between; align-items: center; }

Có 3 item.

Bố cục:

- justify-content: space-between → item đầu sát trái, item cuối sát phải, item giữa ở khoảng giữa
- align-items: center → căn giữa theo chiều dọc

Kết quả: 3 item nằm trên cùng một hàng và cách đều nhau

Sơ đồ bố cục:

text
+--------------------------------------+
| item1 item2 item3 |
| (center) |
+--------------------------------------+

---

/_ Trường hợp 4 _/
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }

Có 3 item.

Dự đoán bố cục:

- Grid gồm 3 cột
- cột 1 rộng 200px
- cột 2 chiếm toàn bộ phần còn lại (1fr)
- cột 3 rộng 200px
- khoảng cách giữa cột là 20px

Kết quả: 1 hàng, 3 cột

Sơ đồ bố cục:

text
+--------+----------------------+--------+
| item1 | item2 | item3 |
| 200px | phần còn lại (1fr) | 200px |
+--------+----------------------+--------+

---

/_ Trường hợp 5 _/
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

Có 7 item.
Bố cục:

- repeat(3, 1fr) → grid có 3 cột bằng nhau
- 7 item sẽ tự động xuống hàng

Kết quả:

- Hàng 1: 3 item
- Hàng 2: 3 item
- Hàng 3: còn 1 item

=> 3 hàng, 3 cột

Item cuối (item7) nằm ở hàng 3, cột 1

Sơ đồ bố cục:

text
+-------+-------+-------+
| item1 | item2 | item3 |
+-------+-------+-------+

+-------+-------+-------+
| item4 | item5 | item6 |
+-------+-------+-------+

+-------+
| item7 |
+-------+

Câu C1 (10đ)

1.  Navigation bar ngang (logo + menu + buttons)

Chọn: Flexbox

Giải thích:  
Navbar là layout theo một chiều (horizontal), các phần tử nằm trên cùng một hàng (logo, menu, buttons). Flexbox giúp căn chỉnh dễ dàng bằng `justify-content` và `align-items`, phù hợp cho navigation bar.

---

2.  Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
    Chọn: Grid
    Giải thích:  
    Lưới ảnh cần chia thành nhiều hàng và nhiều cột đều nhau, số lượng ảnh có thể thay đổi.

Câu C2 (10đ) — Debug Flexbox

---

Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

Nguyên nhân

Các card có nội dung khác nhau (tên sản phẩm dài/ngắn khác nhau) nên chiều cao card không đều.

Button không được đẩy xuống cuối card nên bị lệch vị trí giữa các card.

---

Code lỗi

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  margin: 1.5%;
}

.card img {
  width: 100%;
}

.card h3 {
  font-size: 18px;
}

.card .btn {
  padding: 10px;
}
```

---

Cách sửa

Biến `.card` thành Flexbox theo chiều dọc và dùng:

```css
margin-top: auto;
```

để nút luôn dính xuống đáy card.

Code sửa

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 30%;
  margin: 1.5%;

  display: flex;
  flex-direction: column;
}

.card img {
  width: 100%;
}

.card h3 {
  font-size: 18px;
}

.card .btn {
  padding: 10px;

  margin-top: auto;
}
```

Kết quả sau khi sửa

- Các card có chiều cao đồng đều hơn
- Nút "Mua" luôn nằm ở đáy card
- Không còn hiện tượng nút nhảy lên/xuống
---

Lỗi 2: Item không nằm giữa màn hình

Nguyên nhân

`.hero` đã dùng `display: flex` nhưng chưa có:

- `justify-content: center`
- `align-items: center`

Mặc định Flexbox sẽ đặt item ở góc trên bên trái (`flex-start`).

---
Code lỗi
```css
.hero {
  height: 100vh;
  display: flex;
}

.hero-content {
  text-align: center;
}
```

---

Cách sửa

Thêm:

```css
justify-content: center;
align-items: center;
```

để căn giữa ngang và dọc.

Code sửa

```css
.hero {
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
}
```
Kết quả sau khi sửa
- Nội dung nằm chính giữa màn hình
- Căn giữa theo cả chiều ngang và chiều dọc


Lỗi 3: Sidebar bị co lại khi content quá dài

Nguyên nhân

Trong Flexbox, item mặc định có thể bị co (`flex-shrink: 1`).

Khi nội dung quá dài, sidebar bị ép nhỏ lại dù đã đặt:

```css
width: 250px;
```

---

Code lỗi

```css
.layout {
  display: flex;
}

.sidebar {
  width: 250px;
}

.content {
  flex: 1;
}
```

---

Cách sửa

Ngăn sidebar bị co bằng:

```css
flex-shrink: 0;
```

hoặc dùng:

```css
flex: 0 0 250px;
```

Code sửa

```css
.layout {
  display: flex;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
}

.content {
  flex: 1;
}
```

Kết quả sau khi sửa

- Sidebar luôn giữ nguyên chiều rộng `250px`
- Không bị co lại khi content quá dài