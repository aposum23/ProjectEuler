/*
Each new term in the Fibonacci sequence is generated by adding the previous
two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed
four million, find the sum of the even-valued terms.
*/

function fibonacci(number){
    if (number === 1 || number === 2){
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

let result = 0;
let i = 1;
while (true) {
    fibNumber = fibonacci(i);
    if(fibNumber % 2 === 0){
        result += fibNumber;
    }
    if (result > 4000000){
        result -= fibNumber;
        break;
    }
    i++;
}

console.log(result);