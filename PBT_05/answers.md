## Câu A1 (5đ):

### 1. Thẻ `<meta viewport>` chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### 2. Giải thích từng thuộc tính

- `name="viewport"`  
  Xác định rằng thẻ meta này dùng để cấu hình vùng hiển thị (viewport) của trình duyệt trên thiết bị di động.

- `width=device-width`  
  Thiết lập chiều rộng của viewport bằng đúng chiều rộng màn hình thiết bị.  
  Ví dụ: trên iPhone, website sẽ hiển thị theo đúng kích thước màn hình điện thoại thay vì giả lập màn hình desktop lớn.

- `initial-scale=1.0`  
  Thiết lập mức zoom ban đầu là 100% (không phóng to hoặc thu nhỏ khi tải trang lần đầu).

---

### 3. Nếu thiếu thẻ viewport thì iPhone sẽ hiển thị như thế nào?

Nếu thiếu thẻ:

```html
<meta name="viewport" />
```

iPhone (và nhiều trình duyệt mobile khác) sẽ giả định trang web được thiết kế cho desktop, thường tạo một viewport ảo khoảng **980px** hoặc rộng hơn.

Kết quả:

- Toàn bộ website bị **thu nhỏ lại** để vừa màn hình điện thoại.
- Chữ trở nên **rất nhỏ, khó đọc**.
- Người dùng phải **zoom in (phóng to)** để xem nội dung.
- Responsive layout có thể hoạt động không đúng như mong muốn.

Ví dụ: một trang desktop rộng sẽ bị ép nhỏ toàn bộ thay vì tự co giãn theo kích thước điện thoại.

---

## 4. Mobile-First và Desktop-First khác nhau thế nào?

### Mobile-First

**Khái niệm:**  
Thiết kế giao diện cho màn hình nhỏ trước (mobile), sau đó dùng media query để mở rộng cho tablet và desktop.

**Đặc điểm:**

- CSS mặc định dành cho mobile.
- Dùng `min-width` để mở rộng giao diện.

**Ví dụ breakpoint 768px:**

```css
/* Mobile mặc định */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet/Desktop >= 768px */
@media (min-width: 768px) {
  .container {
    width: 80%;
    padding: 20px;
  }
}
```

---

### Desktop-First

**Khái niệm:**  
Thiết kế giao diện desktop trước, sau đó thu nhỏ cho tablet và mobile.

**Đặc điểm:**

- CSS mặc định dành cho desktop.
- Dùng `max-width` để giảm kích thước trên màn hình nhỏ.

**Ví dụ breakpoint 768px:**

```css
/* Desktop mặc định */
.container {
  width: 80%;
  padding: 20px;
}

/* Mobile <= 768px */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}
```

---

## 5. Tại sao Mobile-First được khuyên dùng?

Mobile-First được khuyên dùng vì:

1. **Người dùng mobile chiếm đa số**  
   Phần lớn người dùng hiện truy cập website bằng điện thoại.

2. **Tối ưu hiệu năng tốt hơn**  
   CSS và layout cho mobile nhẹ hơn, sau đó mới thêm tính năng cho màn hình lớn.

3. **Responsive dễ quản lý hơn**  
   Bắt đầu từ giao diện đơn giản rồi mở rộng dần giúp code sạch và dễ bảo trì.

4. **Cải thiện trải nghiệm người dùng trên điện thoại**  
   Nội dung hiển thị rõ ràng, dễ đọc, không cần zoom.

5. **Được khuyến nghị trong thiết kế web hiện đại**  
   Đây là phương pháp phổ biến trong responsive web design và phù hợp với xu hướng phát triển hiện nay.

## Câu A2 :

### 1. Breakpoints là gì?

**Breakpoints** là các mốc kích thước màn hình (screen width) dùng trong responsive design để thay đổi giao diện phù hợp với từng thiết bị.

Bootstrap sử dụng hệ thống breakpoint phổ biến giúp website hiển thị tốt trên mobile, tablet, laptop và desktop.

---

## 2. Breakpoints chuẩn theo Bootstrap

| Breakpoint              | Kích thước (px) | Thiết bị đại diện          | Ví dụ lưới sản phẩm |
| ----------------------- | --------------- | -------------------------- | ------------------- |
| Extra Small (xs)        | `<576px`        | Điện thoại nhỏ, smartphone | 1 cột               |
| Small (sm)              | `≥576px`        | Điện thoại lớn             | 2 cột               |
| Medium (md)             | `≥768px`        | Tablet/iPad                | 2–3 cột             |
| Large (lg)              | `≥992px`        | Laptop nhỏ                 | 3–4 cột             |
| Extra Large (xl)        | `≥1200px`       | Desktop lớn                | 4–5 cột             |
| Extra Extra Large (xxl) | `≥1400px`       | Màn hình rất lớn           | 5–6 cột             |

---

### 3. Giải thích từng breakpoint

#### Extra Small (xs) — `<576px`

- Thiết bị đại diện: điện thoại nhỏ.
- Không gian màn hình hẹp nên cần bố cục đơn giản.
- Ví dụ lưới sản phẩm: **1 cột** để dễ đọc và thao tác.

Ví dụ:

```css
.product-grid {
  grid-template-columns: 1fr;
}
```

---

#### Small (sm) — `≥576px`

- Thiết bị đại diện: điện thoại lớn.
- Có nhiều không gian hơn nên có thể hiển thị thêm sản phẩm.

Ví dụ lưới sản phẩm: **2 cột**

```css
@media (min-width: 576px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

#### Medium (md) — `≥768px`

- Thiết bị đại diện: tablet/iPad.
- Không gian hiển thị rộng hơn.

Ví dụ lưới sản phẩm: **2–3 cột**

```css
@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

#### Large (lg) — `≥992px`

- Thiết bị đại diện: laptop nhỏ.
- Có thể hiển thị nhiều nội dung cùng lúc.

Ví dụ lưới sản phẩm: **3–4 cột**

```css
@media (min-width: 992px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

#### Extra Large (xl) — `≥1200px`

- Thiết bị đại diện: desktop lớn.
- Không gian đủ để hiển thị nhiều sản phẩm.

Ví dụ lưới sản phẩm: **4–5 cột**

---

#### Extra Extra Large (xxl) — `≥1400px`

- Thiết bị đại diện: màn hình desktop rất lớn hoặc monitor rộng.
- Có thể hiển thị nhiều sản phẩm trên cùng hàng.

Ví dụ lưới sản phẩm: **5–6 cột**

---

## 4. Tóm tắt

Responsive design sử dụng breakpoints để điều chỉnh giao diện theo kích thước màn hình. Trên mobile thường hiển thị ít cột để dễ nhìn, còn màn hình lớn sẽ tăng số cột để tận dụng không gian hiển thị.

## Câu A3 (5đ):

## Bảng kết quả

- 375px (iPhone SE) : `100%`
- 600px : `540px`
- 800px : `720px`
- 1000px : `960px`
- 1400px : `1140px`

## Câu A4:

1. Variables đặt biến để dùng khi tái sử dụng nhiều chỗ, chỉ cần thanh đổi biến thì các chỗ khác sẽ tự thay đổi không cần phải mò vào từng chỗ chỉnh sửa.

### VD:

$primary: #805ad5;
$danger: #e53e3e;
$font-body: 'Inter', sans-serif;
$radius: 8px;

.btn-primary {
background: $primary;
border-radius: $radius;
font-family: $font-body;
}

.header {
background: $primary; // Đổi $primary = đổi tất cả!
}

2. Nesting cho phép viết selector bên trong selector khác, giúp code rõ ràng hơn và giống cấu trúc HTML.

### VD:

.navbar {
background: #1a202c;
padding: 16px;

    ul {
        list-style: none;
        display: flex;

        li {
            margin-right: 24px;

            a {
                color: white;
                text-decoration: none;

                &:hover {    // & = thẻ cha (a)
                    color: $primary;
                }
            }
        }
    }

}

3. Mixin dùng để tạo một nhóm CSS có thể tái sử dụng nhiều lần.
   Giống như “hàm” trong lập trình.

### VD:

// Định nghĩa mixin
@mixin flex-center {
display: flex;
justify-content: center;
align-items: center;
}

@mixin responsive($breakpoint) {
@if $breakpoint == tablet {
@media (min-width: 768px) { @content; }
} @else if $breakpoint == desktop {
@media (min-width: 1024px) { @content; }
}
}

// Sử dụng
.hero {
@include flex-center;
height: 100vh;
}

.grid {
grid-template-columns: 1fr;

    @include responsive(tablet) {
        grid-template-columns: repeat(2, 1fr);
    }

    @include responsive(desktop) {
        grid-template-columns: repeat(4, 1fr);
    }

}

5. `@extend` cho phép một class kế thừa style từ class khác.
   Giúp tránh viết lại CSS giống nhau.

### VD:

.button {
padding: 10px;
border-radius: 5px;
}

.primary-button {
@extend .button;
background: blue;
}
