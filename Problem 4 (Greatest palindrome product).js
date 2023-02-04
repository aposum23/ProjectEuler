let number1, number2, proizv;
let max_number = 0;

for (let i = 999; i > 500; i--)
{
    number1 = i;

    for (let j = 999; j > 500; j--)
    {
        number2 = j;

        proizv = String(number1 * number2);

        if (proizv === proizv.split("").reverse().join("") && Number(proizv) > max_number)
        {
            max_number = Number(proizv);
        }
    }
}

console.log(max_number);
