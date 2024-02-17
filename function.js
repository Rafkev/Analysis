function bisectionMethod(func, a, b, tolerance) {
    let fa = func(a);
    let fb = func(b);
    if (fa * fb >= 0) {
        throw new Error("Function has the same sign at both ends of the interval");
    }

    let c = a;
    while ((b - a) / 2 > tolerance) {
        c = (a + b) / 2;
        let fc = func(c);
        if (fc === 0) {
            break; // Found exact solution
        } else if (fa * fc < 0) {
            b = c;
            fb = fc;
        } else {
            a = c;
            fa = fc;
        }
    }
    return c;
}

// Example usage:
// Let's find a root of the function f(x) = x^3 - 2x - 5 in the interval [2, 3] with a tolerance of 0.0001
const func = x => x**3 - 2*x - 5;
const root = bisectionMethod(func, 2, 3, 0.0001);
console.log("Approximate root:", root);
