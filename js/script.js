
 /* 
Create a function that takes 3 arguments 
- The first and second argument will be a number
- The third argument will be an mathmatical operator (+, -, *, /)

Example: If the operator is a '+' then you will add the two numbers together and console log the sum
*/

// Call your function 4 times with different numbers and operators to confirm that it is working correctly

function calculate(num1, num2, operator){
        switch(operator) {
                case '+':
                console.log(num1 + num2);
                break;
                case '-':
                console.log(num1 - num2);
                break;
                case '*':
                console.log(num1 * num2);
                break;
                case '/':
                console.log(num1 / num2);
                break;
                default:
                console.log('You must provide a valid operator');
        }
}
calculate(10, 20, '+');
calculate(2, 10, '-');
calculate(25, 2, '*');
calculate(9, 3, '//');
calculate(81, 3, '/');
calculate(9, 3, '--');
//How JD did  it way 1: 
//function calculate(num1, num2, operator){
//         if (operator === '+') {
//         console.log(num1 + num2);
//         }
//         else if (operator === '-') {
//         console.log(num1 - num2);
//         }
//         else if (operator === '*') {
//         console.log(num1 * num2);
//         }
//         else if (operator === '/') {
//         console.log(num1 / num2);
//         }
// }

//How my group did it : 
//function calculate(num1, num2, operator) {
//        var result;
        
//         if (operator === '+') {
//         result = num1 + num2;
//         }
//         else if (operator === '-') {
//         result = num1 - num2;
//         }
//         else if (operator === '*') {
//         result = num1 * num2;
//         }
//         else if (operator === '/') {
//         result = num1 / num2;
//         }
//         return result;
// }
//         console.log(calculate(10, 5, '+'));
//         console.log(calculate(3, 5, '*'));
//         console.log(calculate(4, 8, '/'));