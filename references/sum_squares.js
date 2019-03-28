var squareOfSum = 0;
var sumOfSquare = 0;
var difference = 0;

for (var i = 1; i < 101; i++) {
    squareOfSum += i;
    sumOfSquare += i * i;
}

squareOfSum = squareOfSum * squareOfSum;
difference = squareOfSum - sumOfSquare;
console.log(difference);