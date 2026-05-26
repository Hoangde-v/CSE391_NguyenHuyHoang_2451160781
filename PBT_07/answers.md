# Câu A1:

## Đoạn 1
### Dự đoán :

Sẽ in ra:
```js
undefined
```
Lý do:`var` có cơ chế hoisting (đưa khai báo lên trên). Tức là JavaScript hiểu gần giống như:
```js
var x;
console.log(x);
x = 5;
```
Nên lúc `console.log(x)` chạy thì biến đã tồn tại nhưng chưa có giá trị → `undefined`.
### Kết quả chạy thực tế
```js
undefined
```
### So sánh
✅ Dự đoán đúng.
### Giải thích
`var` được hoisting và được khởi tạo giá trị mặc định là `undefined`, nên không báo lỗi.
---
## Đoạn 2
```js
console.log(y);
let y = 10;
```
### Dự đoán :

Ban đầu nghĩ có thể cũng giống `var` và in ra:
```js
undefined
```
Nhưng sau khi nhớ lại thì `let` khác `var`, nên Em đoán thực tế sẽ bị lỗi.
### Kết quả chạy thực tế
```js
ReferenceError: Cannot access 'y' before initialization
```
### So sánh

❌ Nếu đoán `undefined` thì sai.
### Điều bất ngờ

Em khá bất ngờ vì `let` cũng có hoisting nhưng lại không dùng được trước khi khai báo.

### Giải thích
`let` vẫn được hoisting nhưng nằm trong vùng gọi là **Temporal Dead Zone (TDZ)**. Trong khoảng thời gian từ đầu scope đến lúc khai báo biến, nếu truy cập biến sẽ bị lỗi.
JavaScript hiểu gần đúng:
```js
// y tồn tại nhưng chưa được phép dùng
console.log(y); // lỗi
let y = 10;
```
Khác với `var`, `let` không tự gán `undefined`.
---
## Đoạn 3
```js
const z = 15;
z = 20;
console.log(z);
```

### Dự đoán :
Em đoán sẽ báo lỗi vì `const` là hằng số, không thể gán lại giá trị.
### Kết quả chạy thực tế
```js
TypeError: Assignment to constant variable.
```
### So sánh
✅ Dự đoán đúng.
### Giải thích
Biến khai báo bằng `const` không thể gán lại giá trị mới.
Ví dụ:
```js
const z = 15;
z = 20;
```

JavaScript sẽ dừng chương trình ngay tại dòng gán lại nên `console.log(z)` không chạy.

---
## Đoạn 4
```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```
### Dự đoán :
Lúc đầu Em hơi phân vân vì `const` không cho sửa giá trị. Nhưng Em đoán đoạn này vẫn chạy được và output là:
```js
[1, 2, 3, 4]
```
### Kết quả chạy thực tế
```js
[1, 2, 3, 4]
```
### So sánh
✅ Dự đoán đúng.
### Điều bất ngờ
Điều này hơi gây nhầm vì tưởng `const` là không thay đổi được gì.
### Giải thích
`const` không cho **gán lại biến**, nhưng nếu biến đó là object hoặc array thì vẫn có thể **thay đổi dữ liệu bên trong**.
Ví dụ:

```js
const arr = [1,2,3];
arr.push(4); // hợp lệ
```

Nhưng nếu làm:

```js
arr = [5,6];
```

thì sẽ lỗi vì đang gán lại biến.

---
## Đoạn 5
```js
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```
### Dự đoán :
Em đoán output sẽ là:
```js
Trong block: 2
Ngoài block: 1
```
Vì `let` có phạm vi block (block scope). Biến `a` bên trong `{}` là biến khác với `a` bên ngoài.

### Kết quả chạy thực tế

```js
Trong block: 2
Ngoài block: 1
```
### So sánh
✅ Dự đoán đúng.
### Giải thích
`let` chỉ tồn tại trong phạm vi block.
Ví dụ:

```js
{
    let a = 2;
}
```
Biến `a` này chỉ dùng được bên trong `{}`. Khi ra ngoài block thì JavaScript dùng biến `a = 1` ở ngoài.
---
## Tổng kết sau khi chạy thử
Sau khi so sánh, Em thấy:

* `var` → có hoisting và cho phép truy cập trước khai báo, kết quả thường là `undefined`.
* `let` → cũng hoisting nhưng bị **Temporal Dead Zone (TDZ)**, truy cập trước khai báo sẽ lỗi.
* `const` → không thể gán lại giá trị.
* `const` với array/object → vẫn thay đổi dữ liệu bên trong được.
* `let` có **block scope**, nên biến trong `{}` không ảnh hưởng biến ngoài.

Điều khiến Em thấy dễ nhầm nhất là:

1. `let` cũng hoisting nhưng lại không dùng được trước khai báo.
2. `const` không có nghĩa là “mọi thứ bất biến”, mà chỉ là không được gán lại biến đó thôi.

# Câu A2:

## Đoạn code

```js
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "3");
console.log(true + true);
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

---

## 1. `typeof null`

```js
console.log(typeof null);
```

### Dự đoán :

Em đoán:

```js
"null"
```

vì giá trị là `null`.

### Kết quả chạy thực tế

```js
"object"
```
### So sánh
❌ Dự đoán sai.
### Điều bất ngờ
Khá khó hiểu vì `null` rõ ràng không phải object nhưng JavaScript lại trả về `"object"`.
### Giải thích
Đây là một lỗi lịch sử của JavaScript từ thời đầu và được giữ lại để tránh làm hỏng code cũ.
Nên:
```js
typeof null
```
sẽ luôn trả về:

```js
"object"
```

---
## 2. `typeof undefined`
```js
console.log(typeof undefined);
```
### Dự đoán :
Em đoán:
```js
"undefined"
```
### Kết quả chạy thực tế

```js
"undefined"
```

### So sánh

✅ Dự đoán đúng.

### Giải thích

`undefined` là kiểu dữ liệu riêng nên `typeof` trả về đúng tên kiểu của nó.
---
## 3. `typeof NaN`
```js
console.log(typeof NaN);
```
### Dự đoán :
Ban đầu Em nghĩ:
```js
"NaN"
```
hoặc `"undefined"` vì nó nghĩa là “không phải số”.
### Kết quả chạy thực tế
```js
"number"
```
### So sánh

❌ Dự đoán sai.

### Điều bất ngờ

`NaN` nghĩa là **Not a Number** nhưng lại thuộc kiểu `"number"`.

### Giải thích
`NaN` là một giá trị đặc biệt trong kiểu số của JavaScript.
Ví dụ:
```js
0 / 0
```
sẽ cho:

```js
NaN
```

nhưng kiểu dữ liệu của nó vẫn là:

```js
number
```

---

## 4. `"5" + 3`

```js
console.log("5" + 3);
```

### Dự đoán :

Em đoán:

```js
"53"
```

### Kết quả chạy thực tế

```js
"53"
```

### So sánh

✅ Dự đoán đúng.

### Giải thích

Dấu `+` khi có string sẽ ưu tiên **nối chuỗi (concatenation)**.

JavaScript tự ép kiểu:

```js
3 → "3"
```
rồi ghép lại:

```js
"5" + "3"
```
thành:
```js
"53"
```
---
## 5. `"5" - 3`
```js
console.log("5" - 3);
```

### Dự đoán :

Em đoán:

```js
2
```

### Kết quả chạy thực tế

```js
2
```
### So sánh
✅ Dự đoán đúng.
### Giải thích
Khác với `+`, toán tử `-` **không dùng để nối chuỗi**, nên JavaScript cố ép dữ liệu thành số.
Nó hiểu gần giống:

```js
Number("5") - 3
```
tức là:
```js
5 - 3 = 2
```
---
## 6. `"5" * "3"`

```js
console.log("5" * "3");
```

### Dự đoán :

Em đoán:

```js
15
```

### Kết quả chạy thực tế

```js
15
```

### So sánh

✅ Dự đoán đúng.

### Giải thích

Toán tử `*` chỉ làm việc với số nên JavaScript tự ép:

```js
"5" → 5
"3" → 3
```
rồi nhân:

```js
5 * 3 = 15
```

---

## 7. `true + true`

```js
console.log(true + true);
```

### Dự đoán :

Em đoán:

```js
2
```

### Kết quả chạy thực tế

```js
2
```

### So sánh

✅ Dự đoán đúng.

### Giải thích

Trong phép toán số:

```js
true → 1
false → 0
```

nên:

```js
true + true
```

thành:

```js
1 + 1 = 2
```

---

## 8. `[] + []`

```js
console.log([] + []);
```

### Dự đoán :

Em đoán:

```js
""
```

(chuỗi rỗng)

### Kết quả chạy thực tế

```js
""
```

### So sánh

✅ Dự đoán đúng.
### Giải thích
Array rỗng khi chuyển thành string sẽ là:
```js
""
```
nên:
```js
"" + ""
```
ra:
```js
""
```
---
## 9. `[] + {}`
```js
console.log([] + {});
```
### Dự đoán :
Em đoán:
```js
"[object Object]"
```
### Kết quả chạy thực tế
```js
"[object Object]"
```
### So sánh
✅ Dự đoán đúng.
### Giải thích
JavaScript ép kiểu:
```js
[] → ""
{} → "[object Object]"
```
nên:
```js
"" + "[object Object]"
```
ra:
```js
"[object Object]"
```
---
## 10. `{} + []`
```js
console.log({} + []);
```
### Dự đoán :
Em đoán sẽ giống trên:
```js
"[object Object]"
```
### Kết quả chạy thực tế
```js
0
```
### So sánh
❌ Dự đoán sai.
### Điều bất ngờ
Đây là dòng khiến Em bất ngờ nhất.
### Giải thích
Khi `{}` đứng đầu dòng, JavaScript đôi lúc hiểu nó là **block code** chứ không phải object.

Nên đoạn này được hiểu gần giống:
```js
+[]
```
Array rỗng:
```js
[]
```
ép thành số:
```js
0
```
nên kết quả là:
```js
0
```
Nếu viết rõ object:
```js
({} + [])
```
thì mới ra:
```js
"[object Object]"
```
---
## Giải thích vì sao `"5" + 3` và `"5" - 3` khác nhau
Đây là chỗ dễ nhầm nhất.
### `"5" + 3`

Dấu `+` có thể dùng để **cộng số** hoặc **nối chuỗi**.
Vì có string `"5"` nên JavaScript chọn nối chuỗi:
```js
"5" + "3"
```
kết quả:
```js
"53"
```
---
### `"5" - 3`

Toán tử `-` không nối chuỗi được.

JavaScript buộc phải ép kiểu:

```js
"5" → 5
```

rồi tính:

```js
5 - 3 = 2
```

---

## Tổng kết sau khi chạy thử

| Biểu thức          |             Kết quả |
| ------------------ | ------------------: |
| `typeof null`      |          `"object"` |
| `typeof undefined` |       `"undefined"` |
| `typeof NaN`       |          `"number"` |
| `"5" + 3`          |              `"53"` |
| `"5" - 3`          |                 `2` |
| `"5" * "3"`        |                `15` |
| `true + true`      |                 `2` |
| `[] + []`          |                `""` |
| `[] + {}`          | `"[object Object]"` |
| `{}` + `[]`        |                 `0` |

Điều làm em thấy dễ nhầm nhất là:

1. `typeof null` lại là `"object"`.
2. `NaN` nghĩa là “không phải số” nhưng kiểu lại là `"number"`.
3. `"5" + 3` và `"5" - 3` cho kết quả khác nhau vì `+` có thể nối chuỗi còn `-` thì không.
4. `{}` + `[]` lại ra `0` vì JavaScript hiểu `{}` là block code.

# Câu A3 — So sánh `==` và `===`
## Đoạn code
```js
console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN == NaN);
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
```

## Dự đoán và kết quả

| Biểu thức            | Dự đoán | Kết quả | Giải thích                    |
| -------------------- | ------: | ------: | ----------------------------- |
| `5 == "5"`           |  `true` |  `true` | `==` ép kiểu `"5"` → `5`      |
| `5 === "5"`          | `false` | `false` | `===` so sánh cả kiểu dữ liệu |
| `null == undefined`  |  `true` |  `true` | Trường hợp đặc biệt của `==`  |
| `null === undefined` | `false` | `false` | Khác kiểu dữ liệu             |
| `NaN == NaN`         |  `true` | `false` | `NaN` không bằng chính nó     |
| `0 == false`         |  `true` |  `true` | `false` được ép thành `0`     |
| `0 === false`        | `false` | `false` | Number khác Boolean           |
| `"" == false`        |  `true` |  `true` | JavaScript ép kiểu về `0`     |

## Kết luận: nên dùng `==` hay `===`?
Nên dùng:
```js
===
```
### Lý do

* Không tự ép kiểu dữ liệu
* Dễ đọc và dễ debug hơn
* Tránh bug khó đoán như:

```js
0 == false      // true
"" == false     // true
```
`==` chỉ nên dùng khi thật sự muốn JavaScript tự ép kiểu.

# Câu A4 — Truthy & Falsy trong JavaScript

## Tất cả giá trị Falsy trong JavaScript

Các giá trị Falsy gồm:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Ngoài các giá trị trên thì hầu hết đều là **Truthy**.

---

## Đoạn code

```js
if ("0") console.log("A");
if ("") console.log("B");
if ([]) console.log("C");
if ({}) console.log("D");
if (null) console.log("E");
if (0) console.log("F");
if (-1) console.log("G");
if (" ") console.log("H");
```

## Dự đoán và kết quả

| Điều kiện  | In hay không | Giải thích                            |
| ---------- | ------------ | ------------------------------------- |
| `if("0")`  | In `"A"`     | `"0"` là string nên Truthy            |
| `if("")`   | Không in     | Chuỗi rỗng là Falsy                   |
| `if([])`   | In `"C"`     | Array rỗng vẫn là Truthy              |
| `if({})`   | In `"D"`     | Object rỗng vẫn là Truthy             |
| `if(null)` | Không in     | `null` là Falsy                       |
| `if(0)`    | Không in     | `0` là Falsy                          |
| `if(-1)`   | In `"G"`     | Số khác 0 là Truthy                   |
| `if(" ")`  | In `"H"`     | Có dấu cách nên không phải chuỗi rỗng |

## Output dự đoán

```js
A
C
D
G
H
```

## Kết luận

Điều dễ nhầm nhất là:

```js
"0"   // Truthy
[]    // Truthy
{}    // Truthy
" "   // Truthy
```

Vì nhìn có vẻ “rỗng” nhưng JavaScript vẫn xem là có giá trị.

# Câu A5 :

### Cách 1
**Viết lại:**
```js id="d6h4a2"
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```
---
### Cách 2
**Viết lại:**
```js id="0j9ntr"
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```
---

### Cách 3
**Viết lại:**
```js id="9iqv4l"
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```

## Kết luận

Template literal giúp:

* Code ngắn gọn, dễ đọc hơn
* Không cần nối chuỗi bằng `+`
* Chèn biến bằng `${}`
* Viết nhiều dòng dễ hơn (đặc biệt với HTML)
