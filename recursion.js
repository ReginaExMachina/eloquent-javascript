// Recursive verison is actually much slower

function recPower(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

// Looping takes less time than function calls

function power(base, exponent) {
    if (exponent == undefined)
        exponent = 2;
    var results = 1;
    for (var count = 0; count < exponent; count++)
        result *= base;
    return result;
}
