const fibonacci = (n) => {
    let fib1 = 0;
    let fib2 = 1;
    let nextFib;
    for (let i = 0; i <= n; i++) {
        console.log(fib1);
        nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }
}

    console.log(fibonacci(10));