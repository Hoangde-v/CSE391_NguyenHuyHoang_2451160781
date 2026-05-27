function tinhHoaDon(danhSachMon, ngay, coTip = false) {

    let tongCong = 0

    // Tính tổng tiền món ăn
    for (let mon of danhSachMon) {
        tongCong += mon.gia * mon.soLuong
    }

    // Xác định % giảm giá
    let phanTramGiam = 0

    if (tongCong > 1000000) {
        phanTramGiam += 15
    } else if (tongCong > 500000) {
        phanTramGiam += 10
    }

    // Wednesday giảm thêm 5%
    if (ngay.toLowerCase() === "wednesday") {
        phanTramGiam += 5
    }

    // Tính tiền giảm
    let tienGiam = tongCong * phanTramGiam / 100
    let sauGiam = tongCong - tienGiam

    // VAT 8%
    let vat = sauGiam * 0.08

    // Tip 5% (optional)
    let tip = coTip ? sauGiam * 0.05 : 0

    // Tổng thanh toán
    let thanhToan = sauGiam + vat + tip

    // In hóa đơn
    console.log("╔════════════════════════════════════════════╗")
    console.log("║             HÓA ĐƠN NHÀ HÀNG               ║")
    console.log("╠════════════════════════════════════════════╣")

    danhSachMon.forEach((mon, index) => {
        let thanhTien = mon.gia * mon.soLuong

        console.log(
            `║ ${index + 1}. ${mon.ten.padEnd(10)} x${mon.soLuong} ` +
            `@${(mon.gia / 1000)}k = ${(thanhTien / 1000)}k`.padEnd(26) +
            "║"
        )
    })

    console.log("╠════════════════════════════════════════════╣")
    console.log(`║ Tổng cộng:        ${tongCong.toLocaleString()}đ`.padEnd(45) + "║")
    console.log(`║ Giảm giá (${phanTramGiam}%):  ${tienGiam.toLocaleString()}đ`.padEnd(45) + "║")
    console.log(`║ VAT (8%):         ${vat.toLocaleString()}đ`.padEnd(45) + "║")
    console.log(`║ Tip (5%):         ${tip.toLocaleString()}đ`.padEnd(45) + "║")
    console.log("╠════════════════════════════════════════════╣")
    console.log(`║ THANH TOÁN:       ${thanhToan.toLocaleString()}đ`.padEnd(45) + "║")
    console.log("╚════════════════════════════════════════════╝")
}


// Test dữ liệu
const menu = [
    {
        ten: "Phở bò",
        gia: 65000,
        soLuong: 2
    },
    {
        ten: "Trà đá",
        gia: 5000,
        soLuong: 3
    },
    {
        ten: "Bún chả",
        gia: 55000,
        soLuong: 1
    }
]

// Wednesday + có tip
tinhHoaDon(menu, "Wednesday", true)