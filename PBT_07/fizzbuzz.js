customFizzBuzz(30, [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" },
  { divisor: 7, word: "Jazz" },
]);

function customFizzBuzz(n, rules) {
  for (let i = 1; i <= n; i++) {
    let result = "";
    // Kiểm tra từng rule
    for (let j = 0; j < rules.length; j++) {
      if (i % rules[j].divisor === 0) {
        result += rules[j].word;
      }
    }
    console.log(`${i}: ${result || ""}`);
  }
}

console.log("\n=== Custom FizzBuzz ===");
