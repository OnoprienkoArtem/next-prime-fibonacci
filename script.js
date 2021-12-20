function isPrimeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return number > 1;
}

function getFibonacciNumber(number) {
    return number <= 1 ? 1 : getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2);
}

function nextPrimeFibonacciNumber(number) {
    let iteration = 1;

    while (true) {
        const fibonacciNumber = getFibonacciNumber(iteration++);
        console.log('fib', fibonacciNumber, number);

        if (fibonacciNumber > number && isPrimeNumber(fibonacciNumber)) {
            console.warn('Next prime fib ', fibonacciNumber);

            return;
        }

        console.warn('bumping to', fibonacciNumber);
    }
}

nextPrimeFibonacciNumber(20); // Next prime fib  89
