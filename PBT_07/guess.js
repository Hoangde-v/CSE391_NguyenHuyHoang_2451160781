const randomNumber = Math.floor(Math.random() * 100) + 1;
// Số lần đoán tối đa
const maxAttempts = 7;
// Đếm số lần đoán
let attempts = 0;
// Lưu các số đã đoán
let guessedNumbers = [];
while (attempts < maxAttempts) {
  let input = prompt(
    `Nhập số từ 1 - 100 (Lượt ${attempts + 1}/${maxAttempts})`,
  );
  // Ép kiểu sang number
  let guess = Number(input);
  //Validate input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Lỗi: Chỉ nhập số từ 1 đến 100!");
    continue;
  }
  // Kiểm tra đoán trùng
  if (guessedNumbers.includes(guess)) {
    alert("Bạn đã đoán số này rồi!");
    continue;
  }
  // Lưu số đã đoán
  guessedNumbers.push(guess);
  // Tăng số lần đoán
  attempts++;
  //So sánh kết quả
  if (guess === randomNumber) {
    alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
    break;
  } else if (guess < randomNumber) {
    alert("Cao hơn");
  } else {
    alert("Thấp hơn");
  }
}
// Hết lượt đoán
if (attempts === maxAttempts) {
  alert(`Bạn đã hết lượt! Đáp án là ${randomNumber}`);
}
