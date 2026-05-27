// higher_order.js


// =====================================================
// 1. pipe() — Nối chuỗi functions
// =====================================================

function pipe(...fns) {

    return function(value) {

        return fns.reduce(
            (result, fn) => fn(result),
            value
        );
    };
}

const process = pipe(
    x => x * 2,         // 5 → 10
    x => x + 10,        // 10 → 20
    x => x.toString(),  // 20 → "20"
    x => "Kết quả: " + x
);

console.log(process(5));
// → "Kết quả: 20"



// =====================================================
// 2. memoize() — Cache kết quả
// =====================================================

function memoize(fn) {

    const cache = {};

    return function(n) {

        if (cache[n] !== undefined) {
            console.log("Lấy từ cache...");
            return cache[n];
        }

        const result = fn(n);

        cache[n] = result;

        return result;
    };
}

const expensiveCalc = memoize((n) => {

    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;
});

console.log(expensiveCalc(1000000));
// → Đang tính...
// → 499999500000

console.log(expensiveCalc(1000000));
// → Lấy từ cache...
// → 499999500000



// =====================================================
// 3. debounce()
// =====================================================

function debounce(fn, delay) {

    let timer;

    return function(...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);


// Test debounce
search("iphone");
search("iphone 16");
search("iphone 16 pro");

// Chỉ lần cuối chạy:
// Searching: iphone 16 pro



// =====================================================
// 4. retry()
// =====================================================

async function retry(fn, maxAttempts = 3) {

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {

        try {

            return await fn();

        } catch (error) {

            console.log(
                `Lần ${attempt} thất bại`
            );

            if (attempt === maxAttempts) {
                throw error;
            }
        }
    }
}


// ================= TEST =================

let count = 0;

retry(async () => {

    count++;

    console.log("Thử:", count);

    if (count < 3) {
        throw new Error("Lỗi!");
    }

    return "Thành công";

})
.then(result => console.log(result))
.catch(error => console.log(error.message));