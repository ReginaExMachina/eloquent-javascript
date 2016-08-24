// Solution 1 - Minimum
// Returns the smallest argument

function min(x, y) {
    if (x < y)
        return x
    else
        return y
}

// Solution 2 - Recursion
// Takes number as parameter and returns true if even

function isEven(number) {
    // Handles negative numbers
    if (number < 0)
        number *= -1
    
    if (number === 0)
        return true
    else if (number === 1)
        return false
    else
        return isEven(number - 2)
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
