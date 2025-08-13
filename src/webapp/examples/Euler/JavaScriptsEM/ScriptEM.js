// JavaScript source code
// use the object names to locate and navigate a form

function odd(n) {
    return n & 0x1;
};

function half(n) {
    return n >> 1;
};

function multiply1(n, a) {
    if (n == 1) return a;
    var result = multiply1(half(n), a + a);
    if (odd(n)) result = result + a;
    return result;
};

function multiply2(r, n, a) {
    if (odd(n)) {
        r = r + a;
        if (n == 1) return r;
    }
    return multiply2(r, half(n), a + a);
}

function multiply4(r, n, a) {
    while (true) {
        if (odd(n)) {
            r = r + a;
            if (n == 1) return r;
        }
        n = half(n);
        a = a + a;
    }
}

function emMultiply() {
    // Use the name attribute of input boxes to retrieve their values
    //var mpcnd = document.getElementById("multiplicand").valueOf();  <<< does not work
    var mpcnd = document.form1.multiplic.value;
    var multiplicand = parseInt(mpcnd); // needed to convert the string in the input box to an integer
    //var mplier = document.getElementById("multiplier").valueOf();  <<< does not work
    var mplier = document.form1.multiplie.value;
    var multiplier = parseInt(mplier);  // needed to convert the string in the input box to an integer
    //
    var product = multiplicand * multiplier;

    alert("Product: " + product);
    product = multiply1(multiplier, multiplicand)
    alert("Egyptian product1: " + product);

    var r = 0;
    product = multiply2(r, multiplier, multiplicand);
    alert("Egyptian product2: " + product);
    document.form1.prod.value = product;

    r = 0;
    product = multiply4(r, multiplier, multiplicand);
    alert("Egyptian product4: " + product);
    document.form1.prod.value = product;


};