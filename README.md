# eloquent-javascript
Exercises from Eloquent Javascript.

## Notes

10/07/2016 - From [Chapter 3] (https://github.com/ReginaExMachina/eloquent-javascript/blob/master/chpt3.js) my isEven function originally looked like this:

```
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
```

But it had bad code smell, and it turns out that v.2 is much more efficient. 


**Example**: Test case num = -100 returned after only 6 steps while the recursive version took 256!!!
