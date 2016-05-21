// Solution 1 - Looping Triangle
// Returns a triangle of hash-tags with 7 console.log calls

function triangleSolution() {
    var step = 0;
    var output = '#';
    var addition = ' #';

    while (step !== 7) {
        console.log(output);
        output += addition;
        step++;
    }
}


// Solution 2 - FizzBuzz
// Returns the Fizz Buzz

function fizzBuzzSolution() {
    var num = 0;
    
    while (num !== 11) {
        if (num % 5 === 0 & num % 3 === 0) {
            console.log('FizzBuzz');
        }
        else if (num % 5 === 0) {
            console.log('Fizz');
        }
        else if (num % 3 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(num);
        }
        
        num++;
    }
}

// Solution 3 - Chessboard
// Returns a 8x8 chessboard of hashtags

function chessboardSolution() {
    for (i = 0; i < 4; i++) {
    console.log('# # # # # # # #');
    console.log(' # # # # # # # ');        
    }
}