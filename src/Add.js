function add(firstNumber, secondNumber){
    return (firstNumber+secondNumber);
}

function diff(firstNumber, secondNumber){
    return (firstNumber-secondNumber);
}
function mul(firstNumber, secondNumber){
    return (firstNumber*secondNumber);
}
function division(firstNumber, secondNumber){
    return (firstNumber/secondNumber).toFixed(2);
}

export { add, diff, mul, division };