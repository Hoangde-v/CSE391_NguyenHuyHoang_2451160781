Câu A1:
3 cách nhúng css vào html là:
C1:
- inline CSS:
- vd: <h1 style="color: red; font-size: 24px;">Tiêu đề</h1>
- ưu điểm: Nhanh gọn, đơn giản
- nhược điểm: khó bảo trì và tái sử dụng
C2:
- Internal CSS
- vd: <head>
  <style>
  h1 { color: red; font-size: 24px; }
  </style>
  </head>
- ưu điểm: dễ đọc
- nhược điểm: file html sẽ dài, ko tái sử dụng được
C3:
- External CSS
- vd:<head>
        <link rel="stylesheet" href="styles.css">
    </head>
- ưu điểm: tái sử dụng, dễ bảo trì
- nhược điểm: phải load thêm file css

Câu A2: (tham khảo tuan_2_css_core/09_css_selectors.md)
1. h1                           → Chọn: tất cả thẻ h1
2. .price                       → Chọn: tất cả element có class price
3. #app header                  → Chọn: Chọn thẻ <header> nằm bên trong element có id app
4. nav a:first-child             → Chọn: Chọn thẻ <a> đầu tiên bên trong <nav>
5. .product.featured h2         → Chọn: Chọn thẻ <h2> nằm bên trong element có class: top-bar, dark
6. article > p                  → Chọn: Chọn các thẻ <p> là con trực tiếp của <article>
7. a[href="/"]                  → Chọn: Chọn thẻ <a> có thuộc tính: href="/"
8. .top-bar.dark h1            → Chọn: Chọn <h1> nằm bên trong element có đồng thời class:top-bar,dark

Câu A3: (tham khảo tuan_2_css_core/11_box_model.md)
/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400 + 40 +10 = 450px
→ Không gian chiếm trên trang = 450 + 20 = 470px

/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 400 - 40 - 10 = 350px
→ Không gian chiếm trên trang = 400 + 20 = 420px

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40px
→ Không phải 65px bởi vì trường hợp này marigin sẽ bị gộp,  margin lớn sẽ ăn margin nhỏ hơn.
Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách = 40 + (-10) = 30px. Vì nếu có margin âm thì chúng sẽ cộng vào.

Câu A4: (Tham khảo tuan_2_css_core/09_css_selectors.md)
1. -A là element -> c
- B là class -> b
- C là id -> a
- D là class -> b
2.Element sẽ có màu đỏ bởi vì nó có độ specificity cao nhất là a
3.Nếu thêm <p class="price" id="main-price" style="color: orange;">, element có màu cam bởi vì inline css có độ ưu tiên cao hơn selector trong file css.
4.Nếu Rule A thêm !important, element có màu đen bởi vì !important có độ specificity là vô cực.