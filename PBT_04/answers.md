Câu A1 (10đ) — 5 Loại Positioning

1.  static

- Vẫn chiếm chỗ trong flow: Có
- Tham chiếu vị trí: Theo flow mặc định của tài liệu
- Cuộn theo trang: \*Có
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

Kết quả: **1 hàng, 4 cột bằng nhau**

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

=> mỗi hàng chứa khoảng **2 item**

Kết quả: **3 hàng, 2 cột**

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

Kết quả: **3 item nằm trên cùng một hàng và cách đều nhau**

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

- Grid gồm **3 cột**
- cột 1 rộng 200px
- cột 2 chiếm toàn bộ phần còn lại (1fr)
- cột 3 rộng 200px
- khoảng cách giữa cột là 20px

Kết quả: **1 hàng, 3 cột**

Sơ đồ bố cục:

text
+--------+----------------------+--------+
| item1 | item2 | item3 |
| 200px | phần còn lại (1fr) | 200px |
+--------+----------------------+--------+

---

/* Trường hợp 5 */
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

Có 7 item.
Bố cục:

- repeat(3, 1fr) → grid có **3 cột bằng nhau**
- 7 item sẽ tự động xuống hàng

Kết quả:

- Hàng 1: 3 item
- Hàng 2: 3 item
- Hàng 3: còn 1 item

=> **3 hàng, 3 cột**

Item cuối (item7) nằm ở **hàng 3, cột 1**

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
