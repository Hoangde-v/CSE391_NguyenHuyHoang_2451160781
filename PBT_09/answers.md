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

CÂU C1 (8đ) — DEBUG DOM CODE

1. Code đã sửa hoàn chỉnh

```javascript
// App: Counter with history

const countDisplay =
  document.querySelector(".count");

const historyList =
  document.getElementById("history");

let count = 0;

// Load localStorage trước
window.addEventListener("load", () => {
  const savedCount =
    localStorage.getItem("count");

  const savedHistory =
    localStorage.getItem("history");

  count = savedCount
    ? Number(savedCount)
    : 0;

  countDisplay.textContent =
    count;

  if (savedHistory) {
    historyList.innerHTML =
      savedHistory;
  }
});

// Increment
document
  .querySelector("#incrementBtn")
  .addEventListener(
    "click",
    function () {
      count++;

      countDisplay.textContent =
        count;

      // Lưu history
      const li =
        document.createElement("li");

      li.textContent =
        "Count changed to " +
        count;

      li.addEventListener(
        "click",
        function () {
          deleteHistory(this);
        }
      );

      historyList.appendChild(
        li
      );
    }
  );

// Decrement
document
  .querySelector(
    "#decrementBtn"
  )
  .addEventListener(
    "click",
    function () {
      count--;

      countDisplay.textContent =
        count;
    }
  );

// Reset
document
  .querySelector("#resetBtn")
  .addEventListener(
    "click",
    () => {
      count = 0;

      countDisplay.textContent =
        count;

      historyList.innerHTML =
        "";
    }
  );

function deleteHistory(
  element
) {
  element.remove();
}

// Clear all history
document
  .querySelector(
    "#clearHistory"
  )
  .addEventListener(
    "click",
    () => {
      const items =
        historyList.querySelectorAll(
          "li"
        );

      items.forEach(item => {
        item.remove();
      });
    }
  );

// Save to localStorage
window.addEventListener(
  "beforeunload",
  () => {
    localStorage.setItem(
      "count",
      count
    );

    localStorage.setItem(
      "history",
      historyList.innerHTML
    );
  }
);
```


2. Các lỗi đã sửa (ít nhất 7 lỗi)

Lỗi 1:
Sai:

```javascript
.addEventListener("onclick", ...)
```

Đúng:

```javascript
.addEventListener("click", ...)
```

Giải thích:
`addEventListener()` dùng `"click"` chứ không dùng `"onclick"`.


Lỗi 2:
Sai:

```javascript
countDisplay = count;
```

Đúng:

```javascript
countDisplay.textContent =
  count;
```

Giải thích:
`countDisplay` là DOM element, không thể gán trực tiếp bằng số.


Lỗi 3:
Sai:

```javascript
historyList.innerHTML = null;
```

Đúng:

```javascript
historyList.innerHTML = "";
```

Giải thích:
Xóa HTML nên dùng chuỗi rỗng.


Lỗi 4:
Sai:

```javascript
item.remove;
```

Đúng:

```javascript
item.remove();
```

Giải thích:
Thiếu dấu `()` nên function không chạy.


Lỗi 5:
Sai:

```javascript
count =
  localStorage.getItem("count");
```

Đúng:

```javascript
count =
  Number(
    localStorage.getItem(
      "count"
    )
  );
```

Giải thích:
`localStorage` trả về string, cần ép kiểu số.


Lỗi 6:
Sai:
Load chỉ count nhưng không load history.

Đúng:

```javascript
historyList.innerHTML =
  savedHistory;
```

Giải thích:
Phải restore history từ localStorage.


Lỗi 7:
Sai:

```javascript
countDisplay.innerHTML
```

Đúng hơn:

```javascript
countDisplay.textContent
```

Giải thích:
Hiển thị text nên dùng `textContent` an toàn hơn.


Lỗi 8:
Sai:

```javascript
element.parentNode.removeChild(
  element
);
```

Đúng gọn hơn:

```javascript
element.remove();
```

Giải thích:
Code ngắn hơn, hiện đại hơn.


Lỗi 9:
Sai:
Reset xóa history nhưng không update count UI đúng cách.

Đúng:

```javascript
countDisplay.textContent =
  count;
```

Giải thích:
Reset cần cập nhật DOM.


=================================================

CÂU C2 (7đ) — PERFORMANCE

1. Vì sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE?

Ví dụ xấu:

```javascript
items.forEach(item => {
  item.addEventListener(
    "click",
    function () {}
  );
});
```

Vấn đề:

- Tốn nhiều memory vì tạo 1000 event listeners
- Hiệu năng giảm khi DOM lớn
- Khó maintain code
- Khi thêm element mới phải bind lại event

Nếu có 1000 phần tử thì browser phải quản lý 1000 listeners riêng biệt.


2. Event Delegation giải quyết như thế nào?

Ý tưởng:

Không bind từng element.

Chỉ bind 1 event lên parent.

Ví dụ:

```javascript
parent.addEventListener(
  "click",
  function (e) {
    if (
      e.target.matches(
        ".item"
      )
    ) {
      console.log(
        "clicked"
      );
    }
  }
);
```

Cách hoạt động:

Event dùng cơ chế bubbling.

Click child → event nổi lên parent.

Parent kiểm tra:

```javascript
e.target
```

để biết user click vào đâu.

Ưu điểm:

- Chỉ cần 1 listener
- Ít memory hơn
- Dễ maintain
- Element tạo động vẫn hoạt động


3. Refactor dùng DocumentFragment

Code gốc:

```javascript
for (let i = 0; i < 1000; i++) {
  const div =
    document.createElement(
      "div"
    );

  div.textContent =
    `Item ${i}`;

  document.body.appendChild(
    div
  );
}
```

Vấn đề:

```javascript
appendChild()
```

chạy 1000 lần trên DOM thật.

Browser phải:

- repaint
- reflow
- recalculate layout

liên tục.


Code refactor:

```javascript
const fragment =
  document.createDocumentFragment();

for (
  let i = 0;
  i < 1000;
  i++
) {
  const div =
    document.createElement(
      "div"
    );

  div.textContent =
    `Item ${i}`;

  fragment.appendChild(
    div
  );
}

document.body.appendChild(
  fragment
);
```


4. Tại sao nhanh hơn?

`DocumentFragment`

là DOM ảo (temporary container).

Các element được build trong memory trước.

Thay vì:

```txt
1000 lần append vào DOM thật
→ 1000 lần reflow/repaint
```

ta có:

```txt
Build trong fragment
→ append 1 lần
→ chỉ 1 lần reflow
```

Kết quả:

- Render nhanh hơn
- Giảm repaint/reflow
- Tốn ít CPU hơn
- Tốt cho danh sách lớn