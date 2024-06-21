
 /* 
Create a function that takes 3 arguments 
- The first and second argument will be a number
- The third argument will be an mathmatical operator (+, -, *, /)

Example: If the operator is a '+' then you will add the two numbers together and console log the sum
*/

// Call your function 4 times with different numbers and operators to confirm that it is working correctly

function calculate(num1, num2, operator) {
        var result;
        
        if (operator === '+') {
        result = num1 + num2;
        }
        else if (operator === '-') {
        result = num1 - num2;
        }
        else if (operator === '*') {
        result = num1 * num2;
        }
        else if (operator === '/') {
        result = num1 / num2;
        }
        return result;
}
        console.log(calculate(10, 5, '+'));
        console.log(calculate(3, 5, '*'));
        console.log(calculate(4, 8, '/'));