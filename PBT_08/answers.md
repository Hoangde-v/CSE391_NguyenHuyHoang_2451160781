# Câu A1:

# # Yêu cầu bài toán

Viết cùng một hàm:

    ``

`js
tinhThueBaoHiem(luong)
`
``

Quy tắc:

    -Thuế = 10 % nếu lương > 11 triệu -
    Thuế = 0 % nếu lương≤ 11 triệu

Hàm trả về object:

    ``

`js
{
    thue,
    thuc_nhan
}
`
``

Trong đó:

    -`thue` = tiền thuế -
    `thuc_nhan` = lương sau thuế

    -- -

    # 1. Function Declaration

# # Code

    ``

`js
function tinhThueBaoHiem(luong) {

    let thue = 0

    if (luong > 11000000) {
        thue = luong * 0.1
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    }

}

// Test
console.log(tinhThueBaoHiem(15000000))
`
``

# # Giải thích

Đây là cách khai báo hàm truyền thống.

Cú pháp:

    ``

`js
function tenHam() {

}
`
``

Ví dụ:

    ``

`js
function hello() {
    console.log("Hello")
}
`
``

---

# 2. Function Expression

# # Code

    ``

`js
const tinhThueBaoHiemExpression = function(luong) {

    let thue = 0

    if (luong > 11000000) {
        thue = luong * 0.1
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    }

}

// Test
console.log(tinhThueBaoHiemExpression(15000000))
`
``

# # Giải thích

Ở cách này, hàm được gán vào biến.

Ví dụ:

    ``

`js
const hello = function() {
    console.log("Hello")
}
`
``

Ta có thể gọi:

    ``

`js
hello()
`
``

---

# 3. Arrow Function

# # Code

    ``

`js
const tinhThueBaoHiemArrow = (luong) => {

    let thue = 0

    if (luong > 11000000) {
        thue = luong * 0.1
    }

    return {
        thue: thue,
        thuc_nhan: luong - thue
    }

}

// Test
console.log(tinhThueBaoHiemArrow(15000000))
`
``

# # Giải thích

Arrow Function là cú pháp ngắn hơn của

function.

Ví dụ:

    ``

`js
const hello = () => {
    console.log("Hello")
}
`
``

Có thể viết ngắn:

    ``

`js
const nhanDoi = x => x * 2
`
``

---

# Kết quả ví dụ

Nếu:

    ``

`js
luong = 15000000
`
``

Thì:

    Thuế:

    ``

`txt
1.500.000đ
`
``

Thực nhận:

    ``

`txt
13.500.000đ
`
``

Object trả về:

    ``

`js
{
    thue: 1500000,
    thuc_nhan: 13500000
}
`
``

---

# Hoisting là gì ?

    **
    Hoisting ** là cơ chế JavaScript đưa phần khai báo lên đầu phạm vi(scope) trước khi chương trình chạy.

Tuy nhiên:

    >
    Không phải kiểu

function nào cũng hoisting giống nhau.

    -- -

    # 1. Function Declaration và Hoisting

# # Ví dụ

    ``

`js
console.log(tinhTong(2, 3))

function tinhTong(a, b) {
return a + b
}
`
``

# # Kết quả

    ``

`txt
5
`
``

# # Giải thích

Function Declaration được ** hoisting toàn bộ hàm ** .

JavaScript hiểu gần như:

    ``

`js
function tinhTong(a, b) {
return a + b
}

console.log(tinhTong(2, 3))
`
``

Nên có thể gọi hàm trước khi khai báo.

    -- -

    # 2. Function Expression và Hoisting

# # Ví dụ

    ``

`js
console.log(tinhTong(2, 3))

const tinhTong = function(a, b) {
return a + b
}
`
``

# # Kết quả

    ``

`txt
ReferenceError
`
``

# # Giải thích

Ở đây:

    ``

`js
tinhTong
`
``

là biến `const`.

Biến `const`
có hoisting nhưng rơi vào:

    ``

`txt
Temporal Dead Zone (TDZ)
`
``

Tức là:

    -Biến đã tồn tại -
    Nhưng chưa được khởi tạo -
    Không được dùng trước khi khai báo

Nên lỗi:

    ``

`txt
Cannot access before initialization
`
``

Muốn chạy đúng phải viết:

    ``

`js
const tinhTong = function(a, b) {
return a + b
}

console.log(tinhTong(2, 3))
`
``

---

# 3. Arrow Function và Hoisting

# # Ví dụ

    ``

`js
console.log(tinhTong(2, 3))

const tinhTong = (a, b) => {
return a + b
}
`
``

# # Kết quả

    ``

`txt
ReferenceError
`
``

# # Giải thích

Arrow Function thường được gán vào:

    ``

`js
const
`
``

hoặc:

    ``

`js
let
`
``

Nên hoạt động giống Function Expression.

Không thể gọi trước khi khai báo.

Phải viết:

    ``

`js
const tinhTong = (a, b) => {
return a + b
}

console.log(tinhTong(2, 3))
`
``

---

# So sánh hoisting

    |
    Kiểu | Hoisting | Gọi trước khai báo |
    |
    -- -- -- | -- -- -- -- -- - | -- -- -- -- -- -- -- -- -- -- |
    |
    Function Declaration | Có(toàn bộ hàm) | ✅Được |
    |
    Function Expression | Không dùng được trước khai báo | ❌Không |
    |
    Arrow Function | Không dùng được trước khai báo | ❌Không |

    -- -

    # Kết luận

    -
    **
    Function Declaration ** được hoisting đầy đủ nên có thể gọi trước khi khai báo. -
    **
    Function Expression ** không gọi trước được vì phụ thuộc vào biến(`const`
        hoặc `let`). -
    **
    Arrow Function ** cũng tương tự Function Expression nên không dùng trước khai báo được.

Thông thường:

    -Dùng ** Function Declaration ** cho hàm lớn, dùng nhiều nơi. -
    Dùng ** Arrow Function ** cho callback hoặc code ngắn gọn. -
    **
    Function Expression ** ít dùng hơn nhưng vẫn phổ biến trong JavaScript.

# Câu A2:

## Đoạn 1

### Code

```js
function counter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const c = counter();

console.log(c.increment());
console.log(c.increment());
console.log(c.increment());
console.log(c.decrement());
console.log(c.getCount());
```

## Dự đoán output

```txt
1
2
3
2
2
```

## Giải thích

Biến:

```js
count;
```

được tạo bên trong:

```js
counter();
```

Ban đầu:

```txt
count = 0
```

Khi gọi:

```js
c.increment();
```

thì:

```js
++count;
```

tăng trước rồi trả về.

Diễn ra như sau:

```txt
count = 0
increment() → 1
increment() → 2
increment() → 3
decrement() → 2
getCount() → 2
```

Đây gọi là **closure**.

Closure nghĩa là: hàm bên trong vẫn nhớ và truy cập được biến ở bên ngoài dù hàm ngoài đã chạy xong.

---

# Đoạn 2

### Code

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 200);
}
```

## Dự đoán output

Sau khoảng 200ms:

```txt
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

---

# Tại sao `var` và `let` khác nhau?

## Với `var`

`var` có **function scope**.

Trong vòng lặp chỉ có **1 biến i duy nhất**.

Khi `setTimeout()` chạy thì vòng lặp đã xong:

```txt
i = 3
```

nên tất cả đều in:

```txt
3
```

Ví dụ hiểu đơn giản:

```txt
var i dùng chung 1 ô nhớ
```

---

## Với `let`

`let` có **block scope**.

Mỗi lần lặp JavaScript tạo một biến mới.

Nên:

```txt
Lần 1 → j = 0
Lần 2 → j = 1
Lần 3 → j = 2
```

Khi `setTimeout()` chạy, mỗi callback nhớ đúng giá trị của nó.

Kết quả:

```txt
0
1
2
```

---

# Kết luận

- `var` dùng chung một biến trong vòng lặp → thường gây lỗi với `setTimeout()`
- `let` tạo biến riêng cho mỗi lần lặp → kết quả đúng hơn
- Closure giúp hàm nhớ biến ở scope bên ngoài

# Câu A3:

## Mảng cho trước

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

---

## 1. Lấy các số chẵn

### Code

```js
const soChan = nums.filter((n) => n % 2 === 0);
```

### Kết quả

```js
[2, 4, 6, 8, 10];
```

---

## 2. Nhân mỗi số với 3

### Code

```js
const nhanBa = nums.map((n) => n * 3);
```

### Kết quả

```js
[3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
```

---

## 3. Tính tổng tất cả

### Code

```js
const tong = nums.reduce((sum, n) => sum + n, 0);
```

### Kết quả

```js
55;
```

---

## 4. Tìm số đầu tiên > 7

### Code

```js
const lonHon7 = nums.find((n) => n > 7);
```

### Kết quả

```js
8;
```

---

## 5. Kiểm tra CÓ số > 10 không

### Code

```js
const coSoLonHon10 = nums.some((n) => n > 10);
```

### Kết quả

```js
false;
```

---

## 6. Kiểm tra TẤT CẢ đều > 0

### Code

```js
const tatCaLonHon0 = nums.every((n) => n > 0);
```

### Kết quả

```js
true;
```

---

## 7. Tạo mảng `"Số X là [chẵn/lẻ]"`

### Code

```js
const moTa = nums.map((n) => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);
```

### Kết quả

```js
[
    "Số 1 là lẻ",
    "Số 2 là chẵn",
    "Số 3 là lẻ",
    ...
]
```

---

## 8. Đảo ngược mảng (không mutate gốc)

### Code

```js
const daoNguoc = [...nums].reverse();
```

### Kết quả

```js
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
```

---

# Tóm tắt methods dùng

| Method         | Công dụng                          |
| -------------- | ---------------------------------- |
| `filter()`     | Lọc phần tử                        |
| `map()`        | Biến đổi từng phần tử              |
| `reduce()`     | Gộp thành 1 giá trị                |
| `find()`       | Tìm phần tử đầu tiên               |
| `some()`       | Kiểm tra có ít nhất 1 phần tử đúng |
| `every()`      | Kiểm tra tất cả đúng               |
| `reverse()`    | Đảo mảng                           |
| `...` (spread) | Copy mảng để không mutate gốc      |


# Câu A4 :
## Code đề bài

```js
const product = {
    name: "iPhone 16",
    price: 25990000,
    specs: {
        ram: 8,
        storage: 256,
        color: "Titan"
    }
};

// Destructuring
const {
    name,
    price,
    specs: { ram, color }
} = product;

console.log(name, price, ram, color);
console.log(specs);

// Spread
const updated = {
    ...product,
    price: 23990000,
    sale: true
};

console.log(updated.price);
console.log(updated.sale);
console.log(product.price);

// Spread gotcha
const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram);
```

---

# 1. Destructuring

## Output

```txt
iPhone 16 25990000 8 Titan
```

## Giải thích

Đoạn này:

```js
const {
    name,
    price,
    specs: { ram, color }
} = product;
```

lấy dữ liệu từ object:

```js
product
```

Tương đương:

```js
const name = product.name
const price = product.price
const ram = product.specs.ram
const color = product.specs.color
```

Nên:

```txt
name = "iPhone 16"
price = 25990000
ram = 8
color = "Titan"
```

---

## Output

```txt
ReferenceError
```

### Giải thích

Dòng này:

```js
console.log(specs)
```

sẽ lỗi.

Vì:

```js
specs: { ram, color }
```

không tạo biến:

```js
specs
```

Nó chỉ destructuring bên trong object.

Tức là chỉ có:

```js
ram
color
```

không có:

```js
specs
```

---

# 2. Spread Operator

## Output

```txt
23990000
true
25990000
```

## Giải thích

### Dòng 1

```js
console.log(updated.price)
```

Kết quả:

```txt
23990000
```

Vì:

```js
price: 23990000
```

ghi đè giá cũ.

---

### Dòng 2

```js
console.log(updated.sale)
```

Kết quả:

```txt
true
```

Do thêm:

```js
sale: true
```

---

### Dòng 3

```js
console.log(product.price)
```

Kết quả:

```txt
25990000
```

Object gốc **không bị đổi**.

Spread:

```js
{ ...product }
```

tạo object mới.

---

# 3. Spread Gotcha (bẫy thường gặp)

## Output

```txt
16
```

## Giải thích

Code:

```js
const copy = { ...product };

copy.specs.ram = 16;
```

Nhiều người nghĩ:

```txt
product.specs.ram = 8
```

nhưng thực tế là:

```txt
16
```

### Tại sao?

Spread chỉ copy **1 cấp (shallow copy)**.

Nghĩa là:

```js
specs
```

vẫn trỏ tới cùng object trong bộ nhớ.

Hiểu đơn giản:

```txt
product.specs ─┐
               ├── cùng object
copy.specs ────┘
```

Nên sửa:

```js
copy.specs.ram = 16
```

thì:

```js
product.specs.ram
```

cũng đổi theo.

---

# Muốn copy hoàn toàn (deep copy)

Có thể dùng:

```js
const copy = structuredClone(product)
```

hoặc:

```js
const copy = JSON.parse(JSON.stringify(product))
```

Khi đó:

```js
copy.specs.ram = 16
```

sẽ **không ảnh hưởng** object gốc.

---

# Tổng kết output

```txt
iPhone 16 25990000 8 Titan
ReferenceError
23990000
true
25990000
16
```

---

# Kết luận

- Destructuring giúp lấy dữ liệu từ object nhanh hơn
- `specs: { ram, color }` không tạo biến `specs`
- Spread (`...`) tạo object mới nhưng chỉ shallow copy
- Nested object vẫn dùng chung reference nên có thể ảnh hưởng object gốc

# Câu C1 :

## Yêu cầu

Refactor code cũ:

- Dùng `filter()`
- Dùng `map()`
- Dùng `sort()`
- Dùng destructuring
- Dùng arrow function
- ≤ 10 dòng code

---

## Code refactor

```js
const processOrders = orders =>
    orders
        .filter(order =>
            order.status === "completed" &&
            order.total > 100000
        )
        .map(({ id, customer, total }) => ({
            id,
            customer,
            total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
```

---

## Giải thích

### `filter()`

Lọc đơn hàng:

```js
status === "completed"
```

và:

```js
total > 100000
```

---

### `map()`

Dùng destructuring:

```js
({ id, customer, total })
```

để lấy dữ liệu cần thiết và tạo object mới.

Tính:

```js
discount = total * 0.1
```

```js
finalTotal = total * 0.9
```

---

### `sort()`

Sắp xếp giảm dần:

```js
b.finalTotal - a.finalTotal
```

---

## Ưu điểm sau refactor

- Ngắn hơn
- Dễ đọc hơn
- Không cần vòng lặp lồng nhau
- Không dùng `var`
- Không cần tự swap thủ công

---

# Câu C2:

## Yêu cầu

Tự viết:

```js
map()
filter()
reduce()
```

Không dùng built-in:

```js
.map()
.filter()
.reduce()
```

---

## Code

```js
const miniArray = {

    map(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }

        return result;
    },


    filter(arr, fn) {

        const result = [];

        for (let i = 0; i < arr.length; i++) {

            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }

        return result;
    },


    reduce(arr, fn, initialValue) {

        let accumulator = initialValue;

        for (let i = 0; i < arr.length; i++) {
            accumulator = fn(
                accumulator,
                arr[i],
                i,
                arr
            );
        }

        return accumulator;
    }
};
```

---

## Test

```js
console.log(
    miniArray.map([1,2,3], x => x * 2)
);
// [2,4,6]

console.log(
    miniArray.filter([1,2,3,4], x => x > 2)
);
// [3,4]

console.log(
    miniArray.reduce(
        [1,2,3,4],
        (a,b) => a+b,
        0
    )
);
// 10
```

---

## Giải thích

### `map()`

Đi qua từng phần tử:

```js
fn(arr[i])
```

rồi lưu kết quả vào:

```js
result
```

Ví dụ:

```txt
[1,2,3]
```

nhân đôi:

```txt
[2,4,6]
```

---

### `filter()`

Chỉ thêm phần tử nếu điều kiện đúng:

```js
if (fn(arr[i]))
```

Ví dụ:

```txt
x > 2
```

Kết quả:

```txt
[3,4]
```

---

### `reduce()`

Gộp nhiều giá trị thành một giá trị.

Ví dụ:

```txt
1 + 2 + 3 + 4
```

Thông qua:

```js
accumulator
```

Kết quả:

```txt
10
```