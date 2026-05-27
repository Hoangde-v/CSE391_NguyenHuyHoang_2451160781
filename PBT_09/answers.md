# Câu A1 — DOM Tree

## HTML đề bài

```html
<div id="app">
    <header>
        <h1>Todo App</h1>
        <nav>
            <a href="#" class="active">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
        </nav>
    </header>

    <main>
        <form id="todoForm">
            <input id="todoInput" type="text">
            <button type="submit">Add</button>
        </form>

        <ul id="todoList">
            <li class="todo-item">Learn HTML</li>
            <li class="todo-item completed">Learn CSS</li>
        </ul>
    </main>
</div>
```

---

## 1. DOM Tree (Sơ đồ cây)

```txt
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
```

---

## 2. querySelector cho từng yêu cầu

### Chọn thẻ `<h1>`

```js
document.querySelector("h1")
```

---

### Chọn input trong form

```js
document.querySelector("#todoForm input")
```

Hoặc:

```js
document.querySelector("#todoInput")
```

---

### Chọn tất cả `.todo-item`

```js
document.querySelectorAll(".todo-item")
```

---

### Chọn link đang active

```js
document.querySelector(".active")
```

Hoặc:

```js
document.querySelector("nav .active")
```

---

### Chọn `<li>` đầu tiên trong `#todoList`

```js
document.querySelector("#todoList li")
```

Hoặc:

```js
document.querySelector("#todoList li:first-child")
```

---

### Chọn tất cả `<a>` bên trong `<nav>`

```js
document.querySelectorAll("nav a")
```

---

# Câu A2 — innerHTML vs textContent

## Sự khác nhau

### `innerHTML`

- Đọc hoặc ghi HTML bên trong element
- Hiểu và render thẻ HTML

Ví dụ:

```js
document.querySelector("#demo").innerHTML =
    "<h1>Hello</h1>";
```

Kết quả:

```html
<h1>Hello</h1>
```

sẽ được render thành heading thật.

---

### `textContent`

- Chỉ xử lý text thuần
- Không render HTML

Ví dụ:

```js
document.querySelector("#demo").textContent =
    "<h1>Hello</h1>";
```

Kết quả hiển thị:

```txt
<h1>Hello</h1>
```

chỉ là chữ bình thường.

---

## Khi nào dùng?

### Dùng `innerHTML`

Khi muốn:

```txt
Tạo HTML động
Render thẻ HTML
```

Ví dụ:

```js
list.innerHTML =
    "<li>HTML</li><li>CSS</li>";
```

---

### Dùng `textContent`

Khi:

```txt
Hiển thị text người dùng nhập
Không cần render HTML
An toàn hơn
```

Ví dụ:

```js
title.textContent = "Xin chào";
```

---

## Câu hỏi bảo mật — XSS

### Vì sao `innerHTML` nguy hiểm?

Nếu user nhập:

```html
<img src=x onerror="alert('Hacked!')">
```

rồi code:

```js
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").innerHTML =
    userInput;
```

thì browser hiểu đây là HTML thật.

Kết quả:

```txt
onerror chạy
```

và có thể:

```txt
chạy JavaScript độc hại
đánh cắp cookie
thực hiện XSS
```

---

## Ví dụ nguy hiểm

User nhập:

```html
<img src=x onerror="alert('Hacked!')">
```

Code:

```js
document.querySelector("#result").innerHTML =
    userInput;
```

Có thể hiện popup:

```txt
Hacked!
```

---

## Cách sửa an toàn

Dùng:

```js
textContent
```

### Code đúng

```js
const userInput =
    document.querySelector("#search").value;

document.querySelector("#result").textContent =
    userInput;
```

Lúc này browser coi nó là text thường:

```txt
<img src=x onerror="alert('Hacked!')">
```

không chạy script.

---

# Câu A3 — Event Bubbling

## Code

```js
document.querySelector("#outer")
.addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner")
.addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn")
.addEventListener("click", (e) => {
    console.log("BUTTON");

    // e.stopPropagation();
});
```

```html
<div id="outer">
    <div id="inner">
        <button id="btn">
            Click me
        </button>
    </div>
</div>
```

---

## Khi click button

### Output

```txt
BUTTON
INNER
OUTER
```

---

## Giải thích

Khi click button:

Event xảy ra ở:

```txt
button
```

sau đó **nổi bọt (bubble)** lên cha:

```txt
button
→ inner
→ outer
```

Nên:

```txt
BUTTON
INNER
OUTER
```

---

## Nếu bật `stopPropagation()`

Code:

```js
document.querySelector("#btn")
.addEventListener("click", (e) => {

    console.log("BUTTON");

    e.stopPropagation();
});
```

### Output

```txt
BUTTON
```

---

## Giải thích

`stopPropagation()`:

```txt
chặn event bubbling
```

Event dừng ở:

```txt
button
```

không nổi lên:

```txt
inner
outer
```

---

# Kết luận

### DOM Query

- `querySelector()` → lấy phần tử đầu tiên
- `querySelectorAll()` → lấy tất cả

### innerHTML vs textContent

- `innerHTML` → render HTML nhưng dễ XSS
- `textContent` → chỉ text, an toàn hơn

### Event Bubbling

Event nổi từ:

```txt
con → cha → ông
```

Có thể chặn bằng:

```js
e.stopPropagation()
```