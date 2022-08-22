
function operate(num1, num2, operator)
{
    if (operator === "+")
    {
        result = add();
    }
    else if (operator === "-")
    {
        result = subtract();
    }
    else if (operator === "%")
    {
        result =  divide();
    }
    else if (operator === "x")
    {
        result = multiply();
    }

    return result;
}

function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}