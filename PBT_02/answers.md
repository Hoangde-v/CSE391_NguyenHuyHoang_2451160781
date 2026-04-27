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