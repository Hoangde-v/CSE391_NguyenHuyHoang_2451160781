const btnOpenForm      = document.getElementById('btnOpenForm');       // Nút mở form
const btnSave          = document.getElementById('btnSave');           // Nút lưu trong modal
const studentForm      = document.getElementById('studentForm');       // Form nhập liệu
const studentTableBody = document.getElementById('studentTableBody');  // Phần thân bảng
const notificationArea = document.getElementById('notificationArea'); // Vùng thông báo
const statTotal        = document.getElementById('statTotal');         // Thống kê tổng SV
const statAvgGpa       = document.getElementById('statAvgGpa');        // Thống kê điểm TB
const modalTitle       = document.getElementById('modalTitle');        // Tiêu đề modal

// Lấy các ô input trong form
const inputMaSV     = document.getElementById('inputMaSV');
const inputHoTen    = document.getElementById('inputHoTen');
const inputNgaySinh = document.getElementById('inputNgaySinh');
const inputLop      = document.getElementById('inputLop');
const inputDiem     = document.getElementById('inputDiem');
const inputEmail    = document.getElementById('inputEmail');

// Khởi tạo đối tượng Bootstrap Modal để điều khiển popup bằng JS
const studentModal = new bootstrap.Modal(document.getElementById('studentModal'));

/* ============================================================
   DỮ LIỆU - Mảng lưu danh sách sinh viên trong bộ nhớ
   ============================================================ */

// Biến lưu trạng thái: đang sửa sinh viên nào (null = đang thêm mới)
let editingId = null;

// Hàm đọc dữ liệu từ localStorage khi tải trang
// Nếu chưa có thì trả về mảng rỗng
function loadStudents() {
  const raw = localStorage.getItem('students');
  return raw ? JSON.parse(raw) : [];
}

// Hàm lưu toàn bộ mảng sinh viên xuống localStorage
function saveStudents(students) {
  localStorage.setItem('students', JSON.stringify(students));
}

// Mảng sinh viên - được nạp từ localStorage ngay khi script chạy
let students = loadStudents();

/* ============================================================
   GIAI ĐOẠN 4A: HIỂN THỊ DANH SÁCH - Hàm render bảng
   ============================================================ */

/**
 * renderStudents() - Vẽ lại toàn bộ bảng từ mảng students
 * Được gọi sau mỗi thao tác thêm / sửa / xóa
 */
function renderStudents() {
  // Xóa nội dung cũ trong tbody
  studentTableBody.innerHTML = '';

  if (students.length === 0) {
    // Hiển thị dòng thông báo nếu danh sách trống
    studentTableBody.innerHTML = `
      <tr class="empty-row">
        <td colspan="8" class="text-center py-4">
          <i class="bi bi-inbox fs-3 d-block mb-2 text-muted"></i>
          Chưa có sinh viên nào. Hãy bấm "Thêm sinh viên" để bắt đầu.
        </td>
      </tr>`;
    return;
  }

  // Duyệt từng sinh viên trong mảng và tạo dòng HTML
  students.forEach(function(sv, index) {
    // Tô màu điểm: xanh ≥8, vàng ≥6, đỏ <6
    let diemClass = 'bg-danger text-white';
    if (sv.diem >= 8)      diemClass = 'bg-success text-white';
    else if (sv.diem >= 6) diemClass = 'bg-warning text-dark';

    // Tạo dòng <tr> với dữ liệu của sinh viên
    // data-id="${sv.id}" giúp JS biết dòng này thuộc sinh viên nào khi bấm Sửa/Xóa
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td><strong>${sv.maSV}</strong></td>
      <td>${sv.hoTen}</td>
      <td>${formatDate(sv.ngaySinh)}</td>
      <td><span class="badge bg-secondary">${sv.lop}</span></td>
      <td>
        <span class="badge badge-gpa ${diemClass}">${parseFloat(sv.diem).toFixed(1)}</span>
      </td>
      <td><a href="mailto:${sv.email}" class="text-decoration-none">${sv.email}</a></td>
      <td class="text-center">
        <button class="btn btn-sm btn-outline-warning me-1 btn-edit" data-id="${sv.id}" title="Sửa">
          <i class="bi bi-pencil-fill"></i>
        </button>
        <button class="btn btn-sm btn-outline-danger btn-delete" data-id="${sv.id}" title="Xóa">
          <i class="bi bi-trash-fill"></i>
        </button>
      </td>`;
    studentTableBody.appendChild(tr);
  });

  // Sau khi render xong, cập nhật thống kê
  updateStatistics();
}

/* ============================================================
   GIAI ĐOẠN 5: THỐNG KÊ - Cập nhật tổng SV và điểm TB
   ============================================================ */

/**
 * updateStatistics() - Tính và hiển thị tổng SV và điểm TB
 */
function updateStatistics() {
  statTotal.textContent = students.length;

  if (students.length === 0) {
    statAvgGpa.textContent = '0.00';
    return;
  }

  // Tính trung bình cộng tất cả điểm
  const tongDiem = students.reduce(function(acc, sv) {
    return acc + parseFloat(sv.diem);
  }, 0);

  statAvgGpa.textContent = (tongDiem / students.length).toFixed(2);
}

/* ============================================================
   GIAI ĐOẠN 5: THÔNG BÁO - Hiển thị toast notification
   ============================================================ */

/**
 * showNotification(message, type) - Hiển thị thông báo góc trên phải
 * type: 'success' | 'danger' | 'warning'
 */
function showNotification(message, type = 'success') {
  const icons = { success: 'check-circle-fill', danger: 'x-circle-fill', warning: 'exclamation-triangle-fill' };
  const id = 'notif-' + Date.now(); // ID duy nhất cho mỗi thông báo

  // Tạo phần tử alert Bootstrap
  const alertEl = document.createElement('div');
  alertEl.id = id;
  alertEl.className = `alert alert-${type} alert-dismissible fade show shadow`;
  alertEl.innerHTML = `
    <i class="bi bi-${icons[type] || 'info-circle-fill'} me-2"></i>
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;

  notificationArea.appendChild(alertEl);

  // Tự động ẩn sau 3 giây
  setTimeout(function() {
    const el = document.getElementById(id);
    if (el) el.remove();
  }, 3000);
}

/* ============================================================
   TIỆN ÍCH - Các hàm hỗ trợ nhỏ
   ============================================================ */

/** Tạo ID ngẫu nhiên duy nhất cho mỗi sinh viên */
function generateId() {
  return Date.now().toString();
}

/** Định dạng ngày từ YYYY-MM-DD sang DD/MM/YYYY */
function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-'); // ['2003', '05', '15']
  return `${parts[2]}/${parts[1]}/${parts[0]}`; // '15/05/2003'
}

/** Reset form về trạng thái ban đầu (xóa dữ liệu + bỏ validation) */
function resetForm() {
  studentForm.reset();
  studentForm.classList.remove('was-validated'); // Bỏ class validation của Bootstrap
  editingId = null; // Trở về chế độ thêm mới

  // Đặt lại tiêu đề modal
  modalTitle.innerHTML = '<i class="bi bi-person-plus-fill me-2"></i>Thêm sinh viên mới';
}

// VALIDATION

/**
 * validateForm() - Kiểm tra toàn bộ dữ liệu form
 * Trả về true nếu hợp lệ, false nếu có lỗi
 */
function validateForm() {
  // Gắn class 'was-validated' để Bootstrap hiện thông báo lỗi
  studentForm.classList.add('was-validated');

  // Kiểm tra form hợp lệ theo thuộc tính HTML (required, min, max, type...)
  if (!studentForm.checkValidity()) {
    return false;
  }

  // Kiểm tra thêm: điểm phải trong khoảng 0-10
  const diem = parseFloat(inputDiem.value);
  if (isNaN(diem) || diem < 0 || diem > 10) {
    inputDiem.setCustomValidity('Điểm phải từ 0 đến 10');
    return false;
  } else {
    inputDiem.setCustomValidity(''); // Xóa lỗi tùy chỉnh
  }

  // Kiểm tra mã SV không trùng (chỉ khi thêm mới)
  if (!editingId) {
    const maSVMoi = inputMaSV.value.trim().toUpperCase();
    const trung = students.find(function(sv) {
      return sv.maSV.toUpperCase() === maSVMoi;
    });
    if (trung) {
      showNotification(`Mã sinh viên "${maSVMoi}" đã tồn tại!`, 'danger');
      inputMaSV.focus();
      return false;
    }
  }

  return true;
}

/* ============================================================
   GIAI ĐOẠN 3 + 4: XỬ LÝ SỰ KIỆN
   ============================================================ */

// -----------------------------------------------------------
// SỰ KIỆN 1: Bấm nút "Thêm sinh viên" → mở popup
// -----------------------------------------------------------
btnOpenForm.addEventListener('click', function() {
  resetForm();           // Đảm bảo form sạch mỗi lần mở
  studentModal.show();   // Hiển thị modal
});

// -----------------------------------------------------------
// SỰ KIỆN 2: Bấm nút "Lưu" trong modal → trigger submit form
// (Dùng kỹ thuật: nút Lưu bấm → kích hoạt submit của form)
// -----------------------------------------------------------
btnSave.addEventListener('click', function() {
  studentForm.dispatchEvent(new Event('submit'));
});

// -----------------------------------------------------------
// SỰ KIỆN 3 + 5: Submit form → Thêm mới HOẶC Cập nhật
// -----------------------------------------------------------
studentForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Ngăn trình duyệt reload trang

  // Gọi hàm kiểm tra, nếu không hợp lệ thì dừng lại
  if (!validateForm()) return;

  // Lấy dữ liệu từ các ô input
  const maSV     = inputMaSV.value.trim();
  const hoTen    = inputHoTen.value.trim();
  const ngaySinh = inputNgaySinh.value;
  const lop      = inputLop.value;
  const diem     = parseFloat(inputDiem.value);
  const email    = inputEmail.value.trim();

  if (editingId === null) {
    /* --- CHẾ ĐỘ THÊM MỚI --- */

    // Tạo object sinh viên mới
    const svMoi = {
      id: generateId(), // ID duy nhất
      maSV,
      hoTen,
      ngaySinh,
      lop,
      diem,
      email
    };

    students.push(svMoi);           // Thêm vào mảng
    saveStudents(students);         // Lưu xuống localStorage
    showNotification(`Đã thêm sinh viên <strong>${hoTen}</strong> thành công!`);

  } else {
    /* --- CHẾ ĐỘ SỬA --- */

    // Tìm vị trí sinh viên trong mảng theo ID
    const idx = students.findIndex(function(sv) { return sv.id === editingId; });

    if (idx !== -1) {
      // Cập nhật object (giữ nguyên id, thay toàn bộ trường còn lại)
      students[idx] = { id: editingId, maSV, hoTen, ngaySinh, lop, diem, email };
      saveStudents(students);
      showNotification(`Đã cập nhật sinh viên <strong>${hoTen}</strong> thành công!`);
    }
  }

  renderStudents(); // Vẽ lại bảng
  studentModal.hide(); // Đóng popup
});

// -----------------------------------------------------------
// SỰ KIỆN 4: Bấm nút "Sửa" trong bảng → nạp dữ liệu lên form
// SỰ KIỆN 6: Bấm nút "Xóa" trong bảng → xác nhận và xóa
// -----------------------------------------------------------
studentTableBody.addEventListener('click', function(e) {

  // Tìm nút được bấm (có thể bấm vào icon bên trong nút)
  const btnEdit   = e.target.closest('.btn-edit');
  const btnDelete = e.target.closest('.btn-delete');

  if (btnEdit) {
    /* --- XỬ LÝ NÚT SỬA --- */
    const id = btnEdit.dataset.id; // Lấy id từ thuộc tính data-id

    // Tìm sinh viên trong mảng
    const sv = students.find(function(s) { return s.id === id; });
    if (!sv) return;

    // Đặt chế độ sửa: lưu id đang sửa
    editingId = id;

    // Đổi tiêu đề modal sang "Cập nhật"
    modalTitle.innerHTML = '<i class="bi bi-pencil-square me-2"></i>Cập nhật sinh viên';

    // Đưa dữ liệu hiện tại của sinh viên lên các ô input
    inputMaSV.value     = sv.maSV;
    inputHoTen.value    = sv.hoTen;
    inputNgaySinh.value = sv.ngaySinh;
    inputLop.value      = sv.lop;
    inputDiem.value     = sv.diem;
    inputEmail.value    = sv.email;

    // Bỏ class validation cũ để không hiện lỗi ngay khi mở
    studentForm.classList.remove('was-validated');

    studentModal.show(); // Mở popup
  }

  if (btnDelete) {
    /* --- XỬ LÝ NÚT XÓA --- */
    const id = btnDelete.dataset.id;
    const sv = students.find(function(s) { return s.id === id; });
    if (!sv) return;

    // Hiện hộp xác nhận trước khi xóa
    const confirmed = window.confirm(`Bạn có chắc muốn xóa sinh viên "${sv.hoTen}" không?`);

    if (confirmed) {
      // Lọc bỏ sinh viên có id tương ứng
      students = students.filter(function(s) { return s.id !== id; });
      saveStudents(students);     // Lưu lại localStorage
      renderStudents();           // Vẽ lại bảng
      showNotification(`Đã xóa sinh viên <strong>${sv.hoTen}</strong>.`, 'warning');
    }
  }
});

document.getElementById('studentModal').addEventListener('hidden.bs.modal', function() {
  resetForm();
});

// Gọi renderStudents() ngay khi trang tải xong
// Dữ liệu sẽ được đọc từ localStorage (nếu có) và hiển thị
renderStudents();