/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function primeFactor(n){
    for (let i = 2; i < Math.sqrt(n) + 1; i++) {
        if (n % i === 0) {
            return i
        }
    }

    return n
}

let number = 600851475143

while (true) {
    p = primeFactor(number);
    if (p < number) {
        number = Math.floor(number / p);
    }
    else {
        console.log(number);
        break;
    }
}