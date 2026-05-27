// cart_module.js

function createCart() {

    // Private data
    let items = [];
    let discount = {
        type: null,
        value: 0
    };

    return {

        // Thêm sản phẩm
        addItem(product, quantity = 1) {

            const existingItem = items.find(
                item => item.id === product.id
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({
                    ...product,
                    quantity
                });
            }
        },


        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(
                item => item.id !== productId
            );
        },


        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {

            const item = items.find(
                item => item.id === productId
            );

            if (item) {
                item.quantity = newQuantity;
            }
        },


        // Tính tổng tiền
        getTotal() {

            const subtotal = items.reduce(
                (sum, item) =>
                    sum + item.price * item.quantity,
                0
            );

            let finalTotal = subtotal;

            if (discount.type === "percent") {
                finalTotal -= subtotal * discount.value;
            }

            if (discount.type === "fixed") {
                finalTotal -= discount.value;
            }

            return Math.max(finalTotal, 0);
        },


        // Áp dụng mã giảm giá
        applyDiscount(code) {

            switch (code.toUpperCase()) {

                case "SALE10":
                    discount = {
                        type: "percent",
                        value: 0.1
                    };
                    break;

                case "SALE20":
                    discount = {
                        type: "percent",
                        value: 0.2
                    };
                    break;

                case "FREESHIP":
                    discount = {
                        type: "fixed",
                        value: 30000
                    };
                    break;

                default:
                    console.log("Mã giảm giá không hợp lệ");
            }
        },


        // In giỏ hàng dạng bảng
        printCart() {

            console.log("┌────────────────────────────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm       │ SL │ Đơn giá       │ Tổng tiền              │");
            console.log("├────────────────────────────────────────────────────────────────────┤");

            items.forEach((item, index) => {

                const total =
                    item.price * item.quantity;

                console.log(
                    `│ ${String(index + 1).padEnd(1)} │ ` +
                    `${item.name.padEnd(14)} │ ` +
                    `${String(item.quantity).padStart(2)} │ ` +
                    `${item.price.toLocaleString("vi-VN").padStart(12)} │ ` +
                    `${total.toLocaleString("vi-VN").padStart(20)} │`
                );
            });

            console.log("├────────────────────────────────────────────────────────────────────┤");

            console.log(
                `│ Tổng cộng: ${this.getTotal()
                    .toLocaleString("vi-VN")
                    .padStart(50)}đ │`
            );

            console.log("└────────────────────────────────────────────────────────────────────┘");
        },


        // Tổng số sản phẩm
        getItemCount() {

            return items.reduce(
                (sum, item) =>
                    sum + item.quantity,
                0
            );
        },


        // Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            discount = {
                type: null,
                value: 0
            };
        }
    };
}


// ================= TEST =================

const cart = createCart();

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.addItem(
    {
        id: 3,
        name: "AirPods Pro",
        price: 6990000
    },
    2
);

// tăng quantity lên 2
cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log(
    "Số SP:",
    cart.getItemCount()
);

cart.removeItem(3);

console.log(
    "Sau xóa:",
    cart.getItemCount()
);