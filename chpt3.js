// Solution 1 - Minimum
// Returns the smallest argument

function min(x, y) {
    if (x < y)
        return x
    else
        return y
}

// Solution 2 - Recursion v.2
// Takes number as parameter and returns true if even

function isEven(num) {
    // Handles negative numbers
    if (num < 0)
        num *= -1
    // Checks if number is even or odd
    if (num % 2 === 0)
        return true
    else
        return false
}

// Solution 3 - Bean Counting
// Given a string and character, returns how many times the character is in that string

function countBs(string) {
    return countChar(string, 'B')
}

function countChar(string, chr) {
    var counter = 0
    for (var n = 0; n < string.length; n++)
        if (string.charAt(n) === chr)
            counter = counter + 1
    return counter
}
