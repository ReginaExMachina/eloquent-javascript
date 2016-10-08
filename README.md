# eloquent-javascript
Exercises from Eloquent Javascript.

## Notes

From Chapter 3 my isEven function originally looked like this:

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

But it had bad code smell and it turns out that v.2 is more efficent.
For example, it returned the test case num = -100 after only 6 steps while the recursive version took 256!!!
