let flag = false;
let number = 20;
let minimal_number = 999999999999;

while (!flag) 
{
    let check = true;

    for (let i = 1; i < 21; i++)
    {
        if (number % i !== 0)
        {
            check = false;
            break;
        }
    }
    if (check && number < minimal_number)
    {
        minimal_number = number;
        flag = true;
    }
    number++;
}

console.log(minimal_number);