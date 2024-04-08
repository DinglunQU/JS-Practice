// Define a function with a conditional statement
function checkNumber(number) {
    if (number > 0) {
        return "The number is positive.";
    } else if (number < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}

// Test the function
var result = checkNumber(5);
console.log(result);
