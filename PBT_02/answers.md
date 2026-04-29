Câu A1:
1. type="text" → Ô nhập văn bản 1 dòng bình thường → Không có validation đặc biệt → Dùng nhập tên khách hàng
2. type="email" → Ô nhập text → Tự kiểm tra có dạng email (có @) → Dùng cho đăng ký tài khoản / nhập email
3. type="password" → Ô nhập nhưng bị ẩn ký tự → Không validation riêng (chỉ ẩn) → Dùng nhập mật khẩu đăng nhập
4. type="number" → Ô nhập số, có nút tăng/giảm → Chỉ cho nhập số → Dùng nhập số lượng sản phẩm
5. type="tel" → Ô nhập số điện thoại → Không kiểm tra chặt nhưng hỗ trợ mobile keypad → Dùng nhập số điện thoại
khách hàng
6. type="date" → Hiển thị lịch để chọn ngày → Kiểm tra đúng định dạng ngày → Dùng chọn ngày giao hàng
7. type="radio" → Nút tròn chọn 1 trong nhiều → Chỉ chọn được 1 option → Dùng chọn phương thức thanh toán
8. type="checkbox" → Ô vuông tick nhiều lựa chọn → Có thể chọn nhiều → Dùng chọn nhiều sản phẩm hoặc điều khoản
9. type="file" → Nút upload file → Có thể giới hạn loại file → Dùng upload ảnh đánh giá sản phẩm
10. type="submit" → Nút bấm gửi form → Không validation, chỉ trigger submit → Dùng nút "Đặt hàng"

Câu A2:
TH1: Browser thông báo lỗi để trống khu vực nhập
TH2: Browser thông báo lỗi định dạng email, phải có @
TH3: Browser thông báo lỗi chỉ nhập phạm bi trong khoảng từ 1 đến 10
TH4: Browser thông báo sai định dạng, phải là chữ số và phải có 10 chữ số, người dùng nhập abc123 là sai
TH5: Browser thông báo mật khẩu ko đủ độ dài, tối thiểu là 8 ký tự người dùng mới chỉ nhập 3 kí tự

Câu A3:
1. Để cho người dùng có thể nhận biết được ô input đấy nên nhập thông tin gì.
2. Dùng khi có nhiều nhóm liên quan, Ví dụ thực tế như khi tạo lập phương thức thanh toán, sẽ có nhiều phương thức thanh toán -> cho vào 1 fieldset.
3. Dùng cho button icon. không nên dùng cả label và arial label bởi vì có thể gây xung đột cho trình đọc.

Câu 4A:
1. Thuộc tính lazy sẽ giúp ảnh chỉ load khi người dùng scroll đến ảnh đấy.Nó giúp giảm thời gin load trang, tăng hiệu năng.Không nên dùng khi nó là ảnh chính của trang, ảnh các icon, ảnh banner trên đầu của trang web.
2. Không phải trang web nào cũng hỗ trợ source mà ta gắn vào nên ta để nhiều source để có thể phù hợp cho nhiều loại trang web.3 format video phổ biến nhất là: mp4, webm, ogg
3. Khi ảnh bị lỗi hoặc chưa load kịp alt sẽ hiển thị dòng chữ ở trong ảnh đó để chúng ta biết được đó không phải lỗi hệ thống.
alt cho ip16 = "Ảnh ip 16 cực đẹp"
alt cho trang trí = "Đâyy là ảnh trang trí siêu ngầu"
alt cho biểu đồ doanh thu = "Biểu đồ doanh thu của Q1/2026"

Câu A5:
Dùng img khi chỉ muốn để hiển thị, còn dùng figure khi muốn ảnh là nội dung chính, thêm chú thích và mô tả để cho semantic

Dùng cách 1 khi chỉ muốn để ảnh nhỏ như avatar, hoặc là các icon còn cách 2 khi muốn ảnh có ý nghía riêng của nó hoặc cần chú thích, như các trng sản phẩm của web e-commerce, các ảnh trong bài báo, blog

Câu C1:
-Lỗi 1:Input "Tên" không có <label for> (vi phạm accessibility)
Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>
-Lỗi 2:Input email không có <label> (vi phạm accessibility)
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Email của bạn" required>
-Lỗi 3:Password không có label (vi phạm accessibility)
Sửa: <label for="password">Mật khẩu:</label> <input type="password" id="password" name="password" placeholder="Mật khẩu" required>
-Lỗi 4:Confirm password không có label và không có name (vi phạm accessibility)
Sửa: <label for="confirm">Nhập lại mật khẩu:</label> <input type="password" id="confirm" name="confirm" placeholder="Nhập lại mật khẩu" required>
-Lỗi 5:Phone dùng type="text" (sai best practice)
Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0901234567" required>
-Lỗi 6:Dùng value thay vì placeholder
Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder="0901234567" required>
-Lỗi 7:select> không có label và name (vi phạm accessibility)
Sửa: <label for="city">Thành phố:</label>
<select id="city" name="city" required>
    <option value="">--Chọn--</option>
    <option value="hn">Hà Nội</option>
    <option value="hcm">TP.HCM</option>
</select> 
-Lỗi 8:Checkbox không có input + không có liên kết label
Sửa: <input type="checkbox" id="terms" name="terms" required> <label for="terms">Tôi đồng ý điều khoản</label>

Câu C2:
1.CMND/CCCD: đúng 12 chữ số: pattern: ^[0-9]{12}$
Số tài khoản: 10-15 chữ số: Pattern: ^[0-9]{10,15}$
2.Chỉ dùng validate HTML5 thì không đủ an toàn cho ngân hàng tại vì:
-HTML validation chỉ chạy ở trình duyệt
-Người dùng có thể:
+)Tắt validation
+)Sửa request (DevTools, Postman…)
+)Không kiểm soát được dữ liệu thực sự gửi lên server

3.Ba loại validation mà HTML5 KHÔNG THỂ làm được (phải dùng JavaScript) là:
-So sánh giữa các field VD: mật khẩu với nhập lại mật khẩu
-logic nghiệp vụ, VD:CMND có tồn tại trong hệ thống không, Email đã đăng ký chưa, Số tài khoản có hợp lệ theo ngân hàng
-Validation động theo điều kiện, VD:Chọn quốc gia → đổi format số điện thoại

4.Rủi ro bảo mật nếu chỉ validate trên Frontend mà không validate Backend:
-Rủi ro 1: Bypass validation
-Rủi ro 2: Injection attack

Dựng form cơ bản:
<form action="#" method="POST">

    <!-- CMND/CCCD -->
    <label for="cccd">CMND/CCCD:</label><br>
    <input type="text" id="cccd" name="cccd"
           placeholder="Nhập 12 chữ số"
           pattern="^[0-9]{12}$"
           required><br><br>

    <!-- Số tài khoản -->
    <label for="account">Số tài khoản:</label><br>
    <input type="text" id="account" name="account"
           placeholder="10-15 chữ số"
           pattern="^[0-9]{10,15}$"
           required><br><br>

    <!-- Email -->
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email"
           placeholder="example@gmail.com"
           required><br><br>

    <!-- PIN -->
    <label for="pin">Mã PIN:</label><br>
    <input type="password" id="pin" name="pin"
           placeholder="6 chữ số"
           pattern="^[0-9]{6}$"
           required><br><br>

    <!-- Submit -->
    <button type="submit">Đăng ký</button>

</form>