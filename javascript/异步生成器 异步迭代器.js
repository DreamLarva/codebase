/**
 * 需要node >= 10 或者 Babel stage-4
 * */

async function* fibonacciSequence() {
    for (let a = 0, b = 1; ;) {
        yield a;
        const c = a + b;
        a = b;
        b = c;
    }
}

async function fibonacci(n) {
    for await (const value of fibonacciSequence()) {
        if (n-- === 0) return value;
    }
}


fibonacci(100)
    .then(console.log);