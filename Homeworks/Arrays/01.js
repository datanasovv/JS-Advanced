function addOrSubstract(data) {
    let modifiedArr = [];
    let SumData = 0;
    let modifiedSumData = 0;

    for (let i = 0; i < data.length; i++) {
        let currentNumber = data[i];
        SumData += currentNumber;
        if (currentNumber % 2 === 0) {
            currentNumber += i;
            modifiedArr.push(currentNumber);
            modifiedSumData+=currentNumber;

        }else{
            currentNumber-=i;
            modifiedArr.push(currentNumber);
            modifiedSumData+=currentNumber;
        }

        
    }

    console.log(modifiedArr);
    console.log(SumData);
    console.log(modifiedSumData);
    
    
    
}
addOrSubstract([-5, 11, 3, 0, 2]);