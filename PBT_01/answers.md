Câu A1:
1.Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter, các bước xảy ra là:

- Request xuất phát từ laptop đi qua router WiFi
- Qua nhà mạng VNPT chạy xuyên cáp quang dưới đáy Thái Bình Dương
- Đến data center của trụ sở shoppe
- Server xử lý request
- Response chạy ngược lại: cáp quang - VNPT - router - laptop
- Chrome nhận file HTML, CSS, JS - render ra giao diện và ta sẽ thấy trang của shoppe.
  (tuan_1_html5\1_introduction_html_universe.md + Phần: 🎬 Cuộc Hành Trình 0.3 Giây Xuyên Đại Dương)

  2.Trong DevTools của Chrome, tab Network cho thấy:

- requests/responses (tuan_1_html5\01_introduction_html_universe.md + phần 4.3)

Câu A2:
Các lỗi semantic là:

- Thẻ div đầu nên để là header tại nó là phần đầu
- Thẻ div có class là menu nên để là nav tại đó là phần điều hướng đến các thẻ điều hướng
- Thẻ div có class main nên đổi thành khối main tại nó là phần chứa nội dung chính
- Thẻ div có class là footer nên đổi thành thẻ footer tại nó là phần cuối kết thúc của trang web
Bản sửa lại:
<header class="header">
    <div class="logo">ShopTLU</div>
    <nav class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </nav>
</header>
<main class="main">
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</main>
<footer class="footer">© 2026 ShopTLU</footer>
(tuan_1_html5\04_visible_part_html.md + Bản đồ sementic elements)

Câu A3:

<div>Hộp 1</div>
<span>Text A</span>
<span>Text B</span>
<div>Hộp 2</div>
<span>Text C</span>
<strong>Text D</strong>
<div>Hộp 3</div>

Đoạn code trên sẽ được mô tả như sau:
|Hộp 1|  
|Text A||Text B|  
|Hộp 2|  
|Text A||Text B|  
|Hộp 3|

Dòng 1: (Chiếm 1 mình 1 dòng vì thẻ div là thẻ block, là 1 khối riêng biệt)
Dòng 2: (Thẻ span là thẻ inline, chỉ chiếm nội dung nên 2 text A và B sẽ ở chung 1 dòng và liên tiếp nhau)
Dòng 3: (thẻ div là thẻ block, tự chiếm 1 dòng và xuống dòng vì nó là 1 khối riêng biệt)
Dòng 4: (thẻ span với strong đều là thẻ inline, đều nằm trong 1 dòng khác là thẻ strong sẽ bôi đậm nội dung)
Dòng 5: (thẻ div là thẻ block sẽ chiếm riêng 1 dòng)

Nguồn tham khảo: (tuan_1_html5/02_basic_structure_html.md + phần: Các thẻ cơ bản trong <body>)

Câu A4:
Sự khác nhau giữa <thead>, <tbody>, <tfoot> là:

<thead>: tiêu đề cột,nằm ở đầu bảng
<tbody>: dữ liệu chính,nằm ở giữa bảng
<tfoot>: tổng kết,nằm ở phần cuối bản 
dù có xếp không đúng thứ tự 3 thẻ trên thì dữ liệu nó vẫn sẽ hiển thị theo thứ tự là <thead> -> <tbody> -> <tfoot>
(tham chiếu tuan_1_html5/05_tables_hyperlinks.md + phần: Table bảng dữ liệu)
Không nên dùng table cho việc làm layout là vì:
- Sai semantic
- Khó chỉnh sửa, co giãn
- Lồng nhiều <th> với <td> -> khó nhìn, khó sửa

Câu B3:
Lỗi 1: Dòng 1- trong thẻ Doctype chưa báo đây là thẻ html- thêm html vào thẻ Doctype
Lỗi 2: Dòng 10- thẻ h1 chauw đóng- thêm / vào thẻ h1 ở cuối
Lỗi 3: Dòng 14- thẻ a chưa đóng- sửa thành </a>
Lỗi 4: Dòng 24- thứ tự thẻ sai- thẻ <b> phải đc thẻ <p> bao bọc - đổi chỗ thứ tự thẻ
Lỗi 5: Dòng 5- THẺ <Title> chưa đóng - thêm thẻ đóng </title>

Câu B4:
Em chọn web thegioididong.com

1. thẻ footer và thẻ section bên trong nó luôn,ở cuối trang web và thẻ header ở đầu trang web.
2. table đó hiển thị nội dung chi tiết của sản phẩm, có dùng tbody nhưng không dùng thead.
3. trong form có action: /tim-kiem, không để methhod cụ thể => mặc định là methoc GET, có 1 thẻ inptu type là text.

Câu C1:

<!-- phần đầu trang -->

    <header> <!-- dùng header vì đây là phần đầu -->
        <h1>Logo</h1> <!-- tiêu đề trang -->
        <nav> <!-- nav để chứa menu -->
            <ul> <!-- danh sách menu -->
                <li>Trang chủ</li>
                <li>Sản phẩm</li>
                <li>Liên hệ</li>
            </ul>
        </nav>
    </header>

    <!-- breadcrumb -->
    <nav> <!-- nav vì dùng để điều hướng -->
        <ol> <!-- ol vì có thứ tự -->
            <li>Trang chủ</li>
            <li>Điện thoại</li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <!-- nội dung chính -->
    <main> <!-- main là nội dung chính -->
        <!-- khu sản phẩm -->
        <section> <!-- section để chia phần -->
            <!-- ảnh sản phẩm -->
            <div> <!-- div để chứa nhiều ảnh -->
                <img src="https://placehold.co/200" alt="">
                <img src="https://placehold.co/200" alt="">
                <img src="https://placehold.co/200" alt="">
                <img src="https://placehold.co/200" alt="">
                <img src="https://placehold.co/200" alt="">
            </div>

            <!-- thông tin sản phẩm -->
            <div> <!-- dùng div để bao bọc 1 sản phẩm thành 1 card-->
                <h2>Tên sản phẩm</h2> <!-- tiêu đề -->
                <p>Giá: ...</p> <!-- giá -->
                <p>⭐⭐⭐⭐⭐</p> <!-- đánh giá -->
                <p>Mô tả sản phẩm...</p> <!-- mô tả -->
            </div>
        </section>

        <!-- bảng thông số -->
        <section> <!-- section riêng -->
            <h2>Thông số kỹ thuật</h2>
            <table> <!-- table vì là dữ liệu dạng bảng -->
                <tr>
                    <th>Tên</th> <!-- tiêu đề cột -->
                    <th>Chi tiết</th>
                </tr>
                <tr>
                    <td>Màn hình</td>
                    <td>...</td>
                </tr>
                <tr>
                    <td>Pin</td>
                    <td>...</td>
                </tr>
            </table>
        </section>

        <!-- đánh giá -->
        <section> <!-- section cho comment -->
            <h2>Bình luận</h2>
            <div> <!-- mỗi bình luận -->
                <p>Người dùng 1</p>
                <p>Rất tốt</p>
            </div>
            <div>
                <p>Người dùng 2</p>
                <p>Ổn</p>
            </div>
        </section>
    </main>

    <!-- sidebar -->
    <aside> <!-- aside vì là nội dung phụ -->
        <h2>Sản phẩm tương tự</h2>
        <div>
            <p>Sản phẩm 1</p>
        </div>
        <div>
            <p>Sản phẩm 2</p>
        </div>
    </aside>

    <!-- footer -->
    <footer> <!-- footer là cuối trang -->
        <p>Thông tin website</p>
    </footer>

Câu C2:
Nói “dùng <div> cho mọi thứ là đủ” thì nhanh thật, nhưng về lâu dài lại không ổn. Trước hết là SEO: công cụ tìm kiếm cần hiểu cấu trúc trang để biết đâu là nội dung chính, đâu là menu hay footer. Nếu dùng các thẻ như <main>, <article>, <nav>, thì cấu trúc rõ ràng hơn, giúp bot đọc dễ hơn. Còn nếu toàn <div>, bạn đang bắt máy “đoán”, và điều đó không tốt cho việc tối ưu tìm kiếm.

Lý do thứ hai là Accessibility. Những người dùng trình đọc màn hình sẽ dựa vào các thẻ semantic để điều hướng. Ví dụ họ có thể nhảy nhanh tới <nav> để tìm menu, hoặc tới <main> để đọc nội dung chính. Nếu tất cả chỉ là <div>, trải nghiệm sẽ khó khăn hơn nhiều vì không có dấu hiệu nào để phân biệt các vùng.

Ví dụ cụ thể: một trang blog nếu dùng <article> cho mỗi bài viết, screen reader có thể nhận diện từng bài là một khối độc lập và cho phép người dùng duyệt nhanh theo bài. Nếu thay bằng <div class="post">, chức năng này không còn rõ ràng nữa.

Tuy nhiên, không phải lúc nào <div> cũng sai. Trong thực tế, <div> rất hữu ích khi bạn chỉ cần một khối để chia layout hoặc áp dụng CSS, ví dụ như tạo grid sản phẩm hoặc nhóm các phần tử nhỏ lại. Nói chung, semantic HTML giúp trang “có nghĩa”, còn <div> giúp bạn “dễ bố trí” — nên dùng kết hợp chứ không nên bỏ một trong hai.
