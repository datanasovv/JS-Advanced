function solve(inputArr = [], givenSum) {
    let MagicSum;
    for (let i = 0; i < inputArr.length; i++) {
        currentNumber = inputArr[i];
        for (let j = i+1; j < inputArr.length; j++){
            secondaryNum = inputArr[j];
        MagicSum = currentNumber + secondaryNum;
        if (MagicSum === givenSum) {
            console.log(currentNumber, secondaryNum);
        }
            

        }

    }
}
solve([14, 20, 60, 13, 7, 19, 8],27);