# PHẦN A — ĐỌC HIỂU (20 điểm)

## Câu A1 (10đ)

## 1. Phân tích Grid System

Bootstrap grid có tổng cộng **12 cột**.
Ý nghĩa các class:

```html
col-12
```

→ chiếm toàn bộ 12/12 cột (100%)

```html
col-md-6
```

→ từ breakpoint `md` (≥768px) trở lên chiếm 6/12 cột (50%)

```html
col-lg-3
```

→ từ breakpoint `lg` (≥992px) trở lên chiếm 3/12 cột (25%)

## Bootstrap hoạt động theo nguyên tắc **Mobile-First**, breakpoint lớn hơn sẽ ghi đè breakpoint nhỏ hơn.

## 2. Layout ở từng kích thước

| Kích thước      | `<768px` | `768px - 991px` | `≥992px` |
| --------------- | -------: | --------------: | -------: |
| Số cột hiển thị |    1 cột |           2 cột |    4 cột |
| Width mỗi box   |     100% |             50% |      25% |

---

### A. Mobile (`<768px`)

Áp dụng:

```html
col-12
```

Mỗi box chiếm toàn bộ chiều ngang.

### Layout

```text
┌──────────────┐
│   Box 1      │
├──────────────┤
│   Box 2      │
├──────────────┤
│   Box 3      │
├──────────────┤
│   Box 4      │
└──────────────┘
```

## **Số cột:** 1

### B. Tablet (`768px - 991px`)

Áp dụng:

```html
col-md-6
```

Mỗi box chiếm:

```text
6/12 = 50%
```

→ 2 box trên mỗi hàng.

### Layout

```text
┌───────────┬───────────┐
│  Box 1    │  Box 2    │
├───────────┼───────────┤
│  Box 3    │  Box 4    │
└───────────┴───────────┘
```

## **Số cột:** 2

### C. Desktop (`≥992px`)

Áp dụng:

```html
col-lg-3
```

Mỗi box chiếm:

```text
3/12 = 25%
```

→ 4 box trên một hàng.

### Layout

```text
┌──────┬──────┬──────┬──────┐
│Box 1 │Box 2 │Box 3 │Box 4 │
└──────┴──────┴──────┴──────┘
```

## **Số cột:** 4

## 3. Bảng kết quả

| Kích thước | `<768px` | `768px - 991px` | `≥992px`   |
| ---------- | -------- | --------------- | ---------- |
| Số cột     | 1        | 2               | 4          |
| Box layout | Xếp dọc  | 2 box/hàng      | 4 box/hàng |

---

## 4. Câu hỏi thêm

### `col-md-6` nghĩa là gì?

`col-md-6` nghĩa là:

- Từ breakpoint `md` (**≥768px**) trở lên
- Element sẽ chiếm:

```text
6 / 12 cột
```

hay:

```text
50% chiều rộng
```

Ví dụ:

```html
<div class="col-md-6"></div>
```

## → trên tablet và desktop, phần tử rộng bằng nửa hàng.

### Tại sao không cần viết `col-sm-12`?

Không cần viết:

```html
col-sm-12
```

vì đã có:

```html
col-12
```

`col-12` là áp dụng cho **mọi kích thước từ nhỏ nhất trở lên**.
Bootstrap theo cơ chế **Mobile-First**, nên:

```html
col-12
```

đã mặc định:

```text
mobile = 12/12 = 100%
```

Do đó viết thêm:

```html
col-sm-12
```

sẽ bị dư thừa.
Ví dụ:

```html
<div class="col-12 col-md-6"></div>
```

có nghĩa:

```text
<768px  → 100%
≥768px  → 50%
```

không cần thêm:

```html
col-sm-12
```

vì mobile đã được xử lý sẵn.


# Câu A2 (10đ) — Utilities & Components

## 1. Giải thích class `d-none d-md-block`

### Ý nghĩa từng class

```html
d-none
```

- `d` = display
- `none` = `display: none`

→ phần tử bị **ẩn hoàn toàn**

---

```html
d-md-block
```

Có nghĩa:

- từ breakpoint `md` (**≥768px**) trở lên
- element sẽ:

```css
display: block;
```

---

### Element hiển thị khi nào, ẩn khi nào?

Ví dụ:

```html
<div class="d-none d-md-block">
    Sidebar
</div>
```

#### Mobile (`<768px`)

Áp dụng:

```html
d-none
```

Kết quả:

```css
display: none;
```

→ **Bị ẩn**

---

#### Tablet + Desktop (`≥768px`)

Áp dụng:

```html
d-md-block
```

Kết quả:

```css
display: block;
```

→ **Hiển thị**

---

### Responsive behavior

| Kích thước màn hình | Hiển thị? |
|---|---|
| `<768px` | ❌ Ẩn |
| `≥768px` | ✅ Hiển thị |

---

### Ví dụ layout thực tế

Thường dùng cho:

- Sidebar
- Advertisement panel
- Navigation phụ

Ví dụ:

```html
<aside class="d-none d-md-block">
    Sidebar Filter
</aside>
```

→ mobile ẩn sidebar, desktop hiện sidebar.

---

# 2. 5 Spacing Utilities (Margin/Padding)

Bootstrap có cú pháp:

```text
{property}{side}-{size}
```

Ví dụ:

```text
mt-3
```

Trong đó:

- `m` = margin
- `p` = padding

Side:

| Ký hiệu | Ý nghĩa |
|---|---|
| `t` | top |
| `b` | bottom |
| `s` | start (left) |
| `e` | end (right) |
| `x` | left + right |
| `y` | top + bottom |

---

## 1. `mt-3`

```html
<div class="mt-3"></div>
```

Ý nghĩa:

```css
margin-top
```

→ thêm khoảng cách phía trên.

Ví dụ dùng:

- đẩy card xuống dưới
- tạo khoảng cách giữa section

---

## 2. `mb-4`

```html
<div class="mb-4"></div>
```

Ý nghĩa:

```css
margin-bottom
```

→ thêm khoảng cách phía dưới.

Ví dụ:

- khoảng cách giữa các button
- spacing giữa paragraph

---

## 3. `px-4`

```html
<div class="px-4"></div>
```

Ý nghĩa:

```css
padding-left
padding-right
```

→ padding ngang.

Ví dụ:

- tạo khoảng đệm trong card
- navbar spacing

---

## 4. `py-2`

```html
<div class="py-2"></div>
```

Ý nghĩa:

```css
padding-top
padding-bottom
```

→ padding theo chiều dọc.

Ví dụ:

- button
- menu item

---

## 5. `mb-auto`

```html
<div class="mb-auto"></div>
```

Ý nghĩa:

```css
margin-bottom: auto;
```

→ margin tự động.

Thường dùng với:

```css
flexbox
```

để đẩy element xuống cuối container.

Ví dụ:

```html
<div class="d-flex flex-column">
    <h3>Title</h3>
    <p class="mb-auto">
        Description
    </p>
    <button>Buy</button>
</div>
```

→ button luôn nằm cuối card.

---

# 3. Khác nhau giữa `.container`, `.container-fluid`, `.container-md`

## A. `.container`

```html
<div class="container">
```

### Đặc điểm

- Có chiều rộng tối đa (max-width).
- Responsive theo breakpoint Bootstrap.
- Tự căn giữa.

Ví dụ:

```text
Mobile   → gần full width
Tablet   → fixed width
Desktop  → fixed width
```

Phù hợp:

- website thông thường
- blog
- ecommerce layout

---

## B. `.container-fluid`

```html
<div class="container-fluid">
```

### Đặc điểm

Luôn:

```text
100% chiều rộng màn hình
```

Không có giới hạn max-width.

Ví dụ:

```text
Desktop → full width
Mobile → full width
```

Phù hợp:

- dashboard
- banner toàn màn hình
- admin panel

---

## C. `.container-md`

```html
<div class="container-md">
```

### Đặc điểm

- Full width ở màn hình nhỏ.
- Từ breakpoint `md` (**≥768px**) trở lên mới có max-width giống `.container`.

Ví dụ:

```text
<768px   → full width
≥768px   → fixed width
```

Phù hợp:

- website ưu tiên mobile
- tablet/desktop cần layout gọn hơn

---

## So sánh nhanh

| Class | Mobile | Tablet/Desktop |
|---|---|---|
| `.container` | responsive width | fixed max-width |
| `.container-fluid` | full width | full width |
| `.container-md` | full width | fixed width từ md |

---

## Kết luận

- `.container` → container responsive tiêu chuẩn.
- `.container-fluid` → luôn full width.
- `.container-md` → full width trên mobile, fixed width từ tablet trở lên.

Class:

```html
d-none