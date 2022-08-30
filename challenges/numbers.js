function isEven(number)
{
    let isEven = false;

    if(number % 2 === 0)
    {
        isEven = true
    }

    return isEven
}


function substract(x,y)
{
    return x-y;
}

module.exports = {
    isEven,
    substract
}