let  sum_of_squares = 0;
let square_of_sum = 0;

for (let i = 1; i <= 100; i++)
{
    sum_of_squares += Math.pow(i, 2);
    square_of_sum += i;
}

square_of_sum = Math.pow(square_of_sum, 2);

console.log(square_of_sum - sum_of_squares);