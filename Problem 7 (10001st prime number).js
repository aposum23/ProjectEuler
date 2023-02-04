function isPrimeNumber(number){
    let isPrime = true;

    if (number === 1) {
        return false;
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
    else {
        return false;
    }
}

let i = 0;
let number = 0;

while (i !== 10001)
{
    number++;
    if (isPrimeNumber(number))
    {
        i++;
    }
}

console.log(number);