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

B3:

# SCSS Compile Command

Lệnh compile SCSS sang CSS:

```bash
sass scss/style.scss responsive.css
```

Hoặc watch mode:

```bash
sass --watch scss/style.scss:responsive.css
```

Quy trình:

```text
style.scss → Sass Compile → responsive.css
```

# Câu C1 (10đ) — Phân tích trang web thực (Shopee.vn)

Website được chọn: Shopee Việt Nam

Website:

https://shopee.vn/

---

## 1. Mobile (375px)

### Navigation thay đổi như thế nào?

- Header được tối giản để phù hợp màn hình nhỏ.
- Navigation ngang trên desktop không còn hiển thị đầy đủ.
- Thanh tìm kiếm vẫn giữ vai trò trung tâm.
- Nhiều menu được gom lại thành icon (menu, tài khoản, giỏ hàng, thông báo).
- Không hiển thị quá nhiều liên kết ngang như desktop.

### Lưới content thay đổi mấy cột?

- Product grid thường hiển thị khoảng **2 cột** trên mobile.
- Card sản phẩm nhỏ hơn để tận dụng không gian màn hình.

### Elements nào bị ẩn trên mobile?

Một số phần thường bị giảm hoặc ẩn:

- Banner lớn nhiều cột
- Sidebar navigation
- Một số menu phụ/header links
- Một số recommendation panel hoặc promotion section lớn

### Font size có thay đổi không?

Có.

- Font nhỏ hơn desktop.
- Heading, menu text và product text được giảm kích thước để tối ưu mobile.

---

## 2. Tablet (768px)

### Navigation thay đổi như thế nào?

- Header đầy đủ hơn mobile.
- Thanh tìm kiếm lớn hơn.
- Có nhiều menu hiển thị hơn.
- Một số dropdown/category bắt đầu xuất hiện lại.

### Lưới content thay đổi mấy cột?

- Product grid khoảng **3–4 cột**.
- Khoảng cách card rộng hơn mobile.

### Elements nào bị ẩn?

- Ít thành phần bị ẩn hơn mobile.
- Một số block promotion hoặc sidebar vẫn được giản lược.

### Font size có thay đổi không?

Có.

- Font lớn hơn mobile.
- Khoảng cách giữa các phần tử thoáng hơn.

---

## 3. Desktop (1440px)

### Navigation thay đổi như thế nào?

- Navigation đầy đủ.
- Header hiển thị nhiều liên kết ngang.
- Category menu, account, notifications, cart hiển thị đầy đủ.
- Không cần hamburger menu.

### Lưới content thay đổi mấy cột?

- Product grid thường hiển thị khoảng **5–6 cột** (tuỳ section).
- Khoảng trắng nhiều hơn, card rộng hơn.

### Elements nào bị ẩn?

- Hầu như không bị ẩn.
- Banner, recommendation section, category panel hiển thị đầy đủ.

### Font size có thay đổi không?

Có.

- Heading lớn hơn.
- Nội dung dễ đọc hơn.
- Khoảng cách giữa các thành phần rộng hơn.

---

# So sánh Responsive Layout

| Kích thước | Navigation                 | Product Grid | Thành phần ẩn       |
| ---------- | -------------------------- | -----------: | ------------------- |
| 375px      | Header tối giản, icon/menu |        2 cột | Sidebar, banner lớn |
| 768px      | Navigation mở rộng hơn     |      3–4 cột | Ít thành phần bị ẩn |
| 1440px     | Navigation đầy đủ          |      5–6 cột | Gần như không       |

---

# Media Queries tìm được trong DevTools

Mở:

F12 → DevTools → Inspect → Styles → search "@media"

Shopee sử dụng responsive CSS với nhiều breakpoint để thay đổi layout theo kích thước màn hình. Responsive web thường dùng media queries để thay đổi navigation, grid và typography giữa mobile/tablet/desktop. :contentReference[oaicite:1]{index=1}

### Ví dụ media query 1

```css
@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }
}
```

Ý nghĩa:

- Khi màn hình nhỏ hơn tablet, layout được chuyển để phù hợp mobile.

---

### Ví dụ media query 2

```css
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

Ý nghĩa:

- Desktop hiển thị nhiều sản phẩm hơn trên cùng hàng.

---

# Kết luận

Shopee sử dụng Responsive Web Design để thay đổi giao diện theo kích thước màn hình.

- Mobile: giao diện tối giản, tập trung thao tác nhanh.
- Tablet: hiển thị nhiều nội dung hơn.
- Desktop: navigation và product grid đầy đủ.

Trang sử dụng media queries để thay đổi bố cục, số cột, font size và các thành phần giao diện theo từng breakpoint. Responsive design giúp tối ưu trải nghiệm trên nhiều thiết bị khác nhau.


# Câu C2 (10đ) — Thiết kế Responsive Strategy

## 1. Yêu cầu hệ thống

Trang web đặt bàn nhà hàng gồm:

- Header (logo + số điện thoại đặt bàn)
- Hero image toàn trang
- Grid 6 ảnh món ăn
- Form đặt bàn (ngày, giờ, số người, ghi chú)
- Google Maps nhúng
- Footer

Thiết kế sử dụng **Mobile-First Responsive Design**.

---

# 2. Wireframe Layout

## A. Mobile (<768px)

### Wireframe

```text
┌──────────────────────┐
│ HEADER               │
│ Logo     ☎ Hotline  |
├──────────────────────┤
│ HERO IMAGE           │
│     Full Width       │
├──────────────────────┤
│ FOOD GRID            │
│ [img]                │
│ [img]                │
│ [img]                │
│ [img]                │
│ [img]                │
│ [img]                │
├──────────────────────┤
│ BOOKING FORM         │
│ Date                 │
│ Time                 │
│ Guests               │
│ Note                 │
│ [Reserve Button]     │
├──────────────────────┤
│ GOOGLE MAPS          │
├──────────────────────┤
│ FOOTER               │
└──────────────────────┘
```

### Responsive Strategy (Mobile)

**Những gì bị ẩn?**

- Không ẩn thành phần chính.
- Có thể ẩn Google Maps lớn hoặc giảm chiều cao map để tiết kiệm không gian.
- Hero image được tối giản chiều cao.

**Form nằm đâu?**

- Form đặt bàn nằm **dưới grid món ăn**.
- Hiển thị full width để dễ nhập liệu trên điện thoại.

**Grid ảnh**

- **1 cột**

---

## B. Tablet (768px – 1023px)

### Wireframe

```text
┌────────────────────────────────┐
│ HEADER                         │
│ Logo                Hotline    │
├────────────────────────────────┤
│ HERO IMAGE                     │
├────────────────────────────────┤
│ FOOD GRID (2 columns)          │
│ [img] [img]                    │
│ [img] [img]                    │
│ [img] [img]                    │
├────────────────────────────────┤
│ BOOKING FORM                   │
├────────────────────────────────┤
│ GOOGLE MAPS                    │
├────────────────────────────────┤
│ FOOTER                         │
└────────────────────────────────┘
```

### Responsive Strategy (Tablet)

**Grid ảnh mấy cột?**

- **2 cột**

**Bản đồ nằm đâu?**

- Google Maps nằm **dưới form đặt bàn**.
- Full width.

**Navigation**

- Header rộng hơn mobile.
- Logo và hotline có khoảng cách thoáng hơn.

---

## C. Desktop (≥1024px)

### Wireframe

```text
┌─────────────────────────────────────────────────────┐
│ HEADER                                              │
│ Logo                                     Hotline    │
├─────────────────────────────────────────────────────┤
│ HERO IMAGE                                          │
├─────────────────────────────────────────────────────┤
│ FOOD GRID (3 columns)         │ BOOKING FORM        │
│ [img] [img] [img]             │ Date                │
│ [img] [img] [img]             │ Time                │
│                                │ Guests              │
│                                │ Note                │
│                                │ Reserve Button      │
├─────────────────────────────────────────────────────┤
│ GOOGLE MAPS                                        │
├─────────────────────────────────────────────────────┤
│ FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

### Responsive Strategy (Desktop)

**Layout bao nhiêu cột?**

- **2 cột chính**

Ví dụ:

- Trái: Food gallery
- Phải: Booking form

**Grid ảnh món ăn**

- **3 cột**

**Sidebar có không?**

- **Có thể xem booking form như sidebar bên phải**.
- Form được cố định ở cạnh phải giúp đặt bàn nhanh.

---

# 3. CSS Skeleton (Mobile-First)

```css
/* ======================
   MOBILE FIRST
====================== */

body {
    margin: 0;
}

.container {
    display: grid;
    gap: 20px;
    padding: 20px;
}

/* Header */
.header {
    display: grid;
    grid-template-columns: 1fr auto;
}

/* Hero */
.hero {
    min-height: 300px;
}

/* Food grid */
.food-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

/* Booking form */
.booking-form {
    display: grid;
    gap: 10px;
}

/* Google map */
.map iframe {
    width: 100%;
    height: 300px;
}

/* Footer */
.footer {
    text-align: center;
}

/* ======================
   TABLET
====================== */

@media (min-width: 768px) {

    .food-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero {
        min-height: 400px;
    }
}

/* ======================
   DESKTOP
====================== */

@media (min-width: 1024px) {

    .content-layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 30px;
    }

    .food-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .hero {
        min-height: 500px;
    }
}
```

---

# 4. Kết luận

Thiết kế responsive áp dụng **Mobile-First**:

- **Mobile:** 1 cột, form nằm dưới gallery.
- **Tablet:** gallery 2 cột, map dưới form.
- **Desktop:** layout 2 cột, gallery 3 cột, form hoạt động như sidebar bên phải.

Media Queries dùng:

```css
@media (min-width: 768px)
@media (min-width: 1024px)
```

để mở rộng giao diện từ mobile → tablet → desktop.