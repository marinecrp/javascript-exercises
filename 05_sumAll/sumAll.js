const sumAll = function(firstNumber, secondNumber) {
    if (firstNumber < 0 || secondNumber < 0 || typeof(firstNumber) !== "number" || typeof(secondNumber) !== "number" ) {
        return 'ERROR';
    }
    let smallNumber = firstNumber <= secondNumber ? firstNumber : secondNumber;
    let bigNumber = firstNumber >= secondNumber ? firstNumber : secondNumber;
    let sum = 0;
    for(let i = smallNumber; i<= bigNumber ; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
