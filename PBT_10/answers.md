# Câu A1 (5đ) — Sync vs Async

# 1. Dự đoán thứ tự output

Kết quả output sẽ là:

```txt
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
```

---

# 2. Giải thích chi tiết theo Event Loop

JavaScript chạy theo cơ chế:

* **Call Stack** → chạy code đồng bộ (synchronous)
* **Microtask Queue** → Promise, queueMicrotask
* **Macrotask Queue** → setTimeout, setInterval

**Quy tắc ưu tiên:**

1. Chạy code đồng bộ trước
2. Chạy toàn bộ Microtask Queue
3. Sau đó mới tới Macrotask Queue

---

# 3. Phân tích từng bước

## Bước 1: Chạy code đồng bộ (Synchronous)

```js
console.log("1 - Start");
```

In ra:

```txt
1 - Start
```

---

### setTimeout đầu tiên

```js
setTimeout(() => console.log("2 - Timeout 0ms"), 0);
```

Không chạy ngay.

Được đưa vào **Macrotask Queue**.

Queue lúc này:

```txt
Macrotask:
2 - Timeout 0ms
```

---

### Promise đầu tiên

```js
Promise.resolve().then(() => console.log("3 - Promise"));
```

Được đưa vào **Microtask Queue**.

Queue:

```txt
Microtask:
3 - Promise
```

---

### console.log tiếp theo

```js
console.log("4 - End");
```

In ra:

```txt
4 - End
```

---

### setTimeout 100ms

```js
setTimeout(() => console.log("5 - Timeout 100ms"), 100);
```

Được đưa vào **Macrotask Queue** nhưng phải đợi 100ms.

---

### Promise thứ hai

```js
Promise.resolve().then(() => {
    console.log("6 - Promise 2");
    setTimeout(() => console.log("7 - Nested timeout"), 0);
});
```

Đưa vào **Microtask Queue**.

Queue lúc này:

```txt
Microtask:
3 - Promise
6 - Promise 2
```

---

# 4. Sau khi code đồng bộ kết thúc

Code sync chạy xong.

Output hiện tại:

```txt
1 - Start
4 - End
```

JavaScript bắt đầu xử lý:

## Microtask Queue

### Chạy Promise đầu tiên

```js
console.log("3 - Promise");
```

In ra:

```txt
3 - Promise
```

---

### Chạy Promise thứ hai

```js
console.log("6 - Promise 2");
```

In ra:

```txt
6 - Promise 2
```

Sau đó:

```js
setTimeout(() => console.log("7 - Nested timeout"), 0);
```

Được thêm vào **Macrotask Queue**.

Macrotask lúc này:

```txt
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
```

---

# 5. Chạy Macrotask Queue

Sau khi Microtask rỗng, Event Loop mới xử lý Macrotask.

### Timeout đầu tiên

```js
2 - Timeout 0ms
```

In ra:

```txt
2 - Timeout 0ms
```

---

### Nested timeout

```js
7 - Nested timeout
```

In ra:

```txt
7 - Nested timeout
```

---

### Timeout 100ms

Sau khoảng 100ms:

```txt
5 - Timeout 100ms
```

---

# 6. Tóm tắt Event Loop

## Call Stack (Sync)

Chạy trước:

```txt
1 - Start
4 - End
```

---

## Microtask Queue (Promise)

Chạy ngay sau sync:

```txt
3 - Promise
6 - Promise 2
```

---

## Macrotask Queue (setTimeout)

Chạy cuối:

```txt
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
```

---

# 7. Kết luận

Thứ tự cuối cùng:

```txt
1 - Start
4 - End
3 - Promise
6 - Promise 2
2 - Timeout 0ms
7 - Nested timeout
5 - Timeout 100ms
```

**Nhớ quy tắc quan trọng:**

> Sync → Microtask → Macrotask

Promise luôn được ưu tiên chạy trước `setTimeout()`, kể cả `setTimeout(..., 0)`.


# Câu A2 (5đ) — Fetch API

# 1. Giải thích từng dòng code

## Khai báo hàm async

```js
async function getData()
```

* `async` dùng để khai báo **hàm bất đồng bộ (asynchronous function)**.
* Bên trong hàm có thể sử dụng `await`.
* Hàm `async` luôn trả về một **Promise**.

Ví dụ:

```js
async function hello() {
    return "Hi";
}
```

Thực tế JavaScript hiểu là:

```js
Promise.resolve("Hi");
```

---

## try

```js
try {
```

Dùng để bọc đoạn code có thể xảy ra lỗi.

Nếu có lỗi phát sinh, chương trình sẽ nhảy xuống:

```js
catch(error)
```

---

## fetch API

```js
const response = await fetch("https://api.example.com/data");
```

### fetch trả về gì?

`fetch()` trả về một **Promise**.

Promise này sẽ resolve thành một object kiểu `Response`.

Ví dụ:

```js
fetch(url)
```

Tương đương:

```js
Promise<Response>
```

---

## Tại sao cần `await`?

Vì `fetch()` chạy bất đồng bộ.

Nếu không dùng `await`:

```js
const response = fetch(url);
console.log(response);
```

Kết quả:

```txt
Promise { <pending> }
```

Ta chưa lấy được dữ liệu thật.

Dùng:

```js
await fetch(url)
```

JavaScript sẽ:

* tạm dừng hàm async
* chờ Promise hoàn thành
* lấy object `Response`

Sau đó mới chạy tiếp.

Ví dụ:

```js
const response = await fetch(url);
console.log(response.status);
```

---

## response.ok

```js
if (!response.ok)
```

`response.ok` là thuộc tính boolean (`true/false`).

### Khi nào bằng true?

Khi status code nằm trong khoảng:

```txt
200 → 299
```

Ví dụ:

```txt
200 OK
201 Created
204 No Content
```

---

### Khi nào bằng false?

Khi HTTP request thất bại.

Ví dụ các status code:

| Status | Ý nghĩa               |
| ------ | --------------------- |
| 404    | Not Found             |
| 500    | Internal Server Error |
| 403    | Forbidden             |

Ví dụ:

```txt
404 → API không tồn tại
500 → lỗi server
403 → không có quyền truy cập
```

---

## throw Error

```js
throw new Error(`HTTP ${response.status}`);
```

Nếu request không thành công:

Ví dụ:

```txt
404
```

thì sẽ tạo lỗi:

```txt
HTTP 404
```

và nhảy xuống:

```js
catch(error)
```

---

## response.json()

```js
const data = await response.json();
```

### response.json() dùng để làm gì?

Chuyển dữ liệu JSON từ server thành object JavaScript.

Ví dụ server trả về:

```json
{
    "name": "Huy",
    "age": 20
}
```

Sau:

```js
await response.json()
```

ta có:

```js
{
    name: "Huy",
    age: 20
}
```

---

### Tại sao phải `await` lần nữa?

Vì:

```js
response.json()
```

cũng trả về **Promise**.

Lý do:

* Browser phải đọc body response
* Parse JSON
* Chuyển sang object JS

Đây là thao tác bất đồng bộ.

Nếu không dùng `await`:

```js
const data = response.json();
console.log(data);
```

Kết quả:

```txt
Promise { <pending> }
```

Dùng:

```js
const data = await response.json();
```

để lấy dữ liệu thật.

---

## return data

```js
return data;
```

Trả dữ liệu về cho nơi gọi hàm.

Ví dụ:

```js
const result = await getData();
console.log(result);
```

---

## catch

```js
catch(error)
```

Dùng để bắt lỗi xảy ra trong:

```js
try
```

---

## console.error

```js
console.error("Failed:", error.message);
```

In thông báo lỗi.

Ví dụ:

```txt
Failed: HTTP 404
```

hoặc:

```txt
Failed: Unexpected token
```

---

## return null

```js
return null;
```

Nếu có lỗi, hàm trả về:

```txt
null
```

để tránh chương trình bị crash.

---

# 2. try...catch bắt những lỗi gì?

### 1. Network Error ✅

Ví dụ:

* mất mạng
* server không phản hồi
* DNS lỗi

Ví dụ:

```txt
TypeError: Failed to fetch
```

Lỗi này sẽ bị `catch`.

---

### 2. HTTP 404, 500 ❌ (không tự catch)

Nhiều người nhầm chỗ này.

Ví dụ:

```txt
404 Not Found
```

`fetch()` **không throw error**.

Nó vẫn resolve Promise bình thường.

Ví dụ:

```js
const response = await fetch(url);
console.log(response.status);
```

Output:

```txt
404
```

Cho nên phải tự kiểm tra:

```js
if (!response.ok)
```

rồi:

```js
throw new Error(...)
```

thì mới nhảy vào `catch`.

---

### 3. JSON Parse Error ✅

Nếu dữ liệu không phải JSON hợp lệ:

Ví dụ server trả:

```txt
hello world
```

nhưng code:

```js
await response.json();
```

Browser không parse được.

Sẽ throw lỗi:

```txt
SyntaxError
```

và `catch` bắt được.

---

# 3. Tóm tắt nhanh

| Thành phần              |                 Vai trò |
| ----------------------- | ----------------------: |
| `fetch()`               |        gửi HTTP request |
| `await fetch()`         |  chờ request hoàn thành |
| `response.ok`           | kiểm tra status 200–299 |
| `response.json()`       | parse JSON thành object |
| `await response.json()` |          chờ parse xong |
| `try...catch`           |         bắt lỗi runtime |

---

# 4. Kết luận

* `fetch()` trả về **Promise<Response>**
* Cần `await` vì request bất đồng bộ
* `response.ok = false` khi status không nằm trong `200–299`
* `response.json()` cũng trả về Promise nên phải `await`
* `catch()` bắt được:

  * Network Error ✅
  * JSON Parse Error ✅
  * HTTP 404/500 chỉ bắt được nếu ta `throw Error()` thủ công ✅

# Câu A3 (5đ) — Promise States

## 1. Sơ đồ 3 trạng thái của Promise

Promise có 3 trạng thái:

1. **Pending** (đang chờ)
2. **Fulfilled** (thành công)
3. **Rejected** (thất bại)

Sơ đồ:

```txt id="m1e2k7"
                Promise
                   |
                Pending
               /       \
              /         \
             v           v
      Fulfilled       Rejected
       (resolve)       (reject)
```

Giải thích:

### Pending

Đây là trạng thái ban đầu.

Promise đang thực hiện công việc nhưng chưa có kết quả.

Ví dụ:

```js id="h2q6md"
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});
```

Trong 2 giây đầu:

```txt id="l8e5pa"
Pending
```

---

### Fulfilled

Khi Promise hoàn thành thành công.

Thông qua:

```js id="k1x8jw"
resolve()
```

Ví dụ:

```js id="f2d7yx"
resolve("Done");
```

Kết quả:

```txt id="y3b1pm"
Fulfilled
```

---

### Rejected

Khi Promise thất bại.

Thông qua:

```js id="d4v8nt"
reject()
```

Ví dụ:

```js id="p7z4ac"
reject("Error");
```

Kết quả:

```txt id="x4m2ev"
Rejected
```

---

## Ví dụ đầy đủ

```js id="c8h5ko"
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Completed");
    } else {
        reject("Failed");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

Nếu:

```js id="v4y2du"
success = true
```

Output:

```txt id="r3g8aq"
Completed
```

Nếu:

```js id="u6c2na"
success = false
```

Output:

```txt id="j7k4hf"
Failed
```

---

# 2. Callback Hell là gì?

**Callback Hell** là hiện tượng callback lồng callback quá nhiều cấp.

Code bị:

* khó đọc
* khó debug
* khó bảo trì
* lệch tab rất sâu (pyramid of doom)

Ví dụ:

```txt id="f4p9er"
callback
 └── callback
      └── callback
           └── callback
```

---

## Ví dụ 4 cấp Callback Hell

Giả sử:

1. Login user
2. Lấy profile
3. Lấy posts
4. Lấy comments

### Callback Hell

```js id="m9d6qw"
function login(callback) {
    setTimeout(() => {
        callback("user123");
    }, 1000);
}

function getProfile(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "Huy" });
    }, 1000);
}

function getPosts(profile, callback) {
    setTimeout(() => {
        callback(["Post 1", "Post 2"]);
    }, 1000);
}

function getComments(posts, callback) {
    setTimeout(() => {
        callback(["Good", "Nice"]);
    }, 1000);
}

login((userId) => {
    console.log("User:", userId);

    getProfile(userId, (profile) => {
        console.log("Profile:", profile);

        getPosts(profile, (posts) => {
            console.log("Posts:", posts);

            getComments(posts, (comments) => {
                console.log("Comments:", comments);
            });
        });
    });
});
```

---

### Output

```txt id="w2m8ak"
User: user123
Profile: { id: 'user123', name: 'Huy' }
Posts: ['Post 1', 'Post 2']
Comments: ['Good', 'Nice']
```

---

## Vấn đề của Callback Hell

Code bị lồng nhiều cấp:

```txt id="h4q1lm"
login
 └── getProfile
      └── getPosts
           └── getComments
```

Nhược điểm:

* khó đọc
* khó sửa lỗi
* khó tái sử dụng code
* dễ gây bug

---

# 3. Refactor bằng Promise + async/await

Đầu tiên chuyển callback thành Promise.

```js id="d7x5vn"
function login() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("user123");
        }, 1000);
    });
}

function getProfile(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: userId,
                name: "Huy"
            });
        }, 1000);
    });
}

function getPosts(profile) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2"]);
        }, 1000);
    });
}

function getComments(posts) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Good", "Nice"]);
        }, 1000);
    });
}
```

---

## Refactor thành async/await

```js id="j6n3ty"
async function getData() {
    try {
        const userId = await login();
        console.log("User:", userId);

        const profile = await getProfile(userId);
        console.log("Profile:", profile);

        const posts = await getPosts(profile);
        console.log("Posts:", posts);

        const comments = await getComments(posts);
        console.log("Comments:", comments);

    } catch (error) {
        console.log(error);
    }
}

getData();
```

---

## Ưu điểm của async/await

Code nhìn giống synchronous:

```txt id="a8f3pt"
login
→ getProfile
→ getPosts
→ getComments
```

Ưu điểm:

* dễ đọc hơn
* ít lồng nhau
* dễ debug
* dễ xử lý lỗi với `try...catch`

---

# 4. So sánh

| Callback Hell            |        async/await |
| ------------------------ | -----------------: |
| nhiều callback lồng nhau |     code phẳng hơn |
| khó đọc                  |             dễ đọc |
| khó debug                |           dễ debug |
| khó xử lý lỗi            | dùng `try...catch` |

---

# 5. Kết luận

* Promise có 3 trạng thái:

  * `Pending`
  * `Fulfilled`
  * `Rejected`

* Callback Hell là callback lồng quá nhiều cấp gây khó đọc và khó bảo trì.

* `async/await` giúp viết code bất đồng bộ dễ hiểu hơn, tránh callback hell và xử lý lỗi tốt hơn.
