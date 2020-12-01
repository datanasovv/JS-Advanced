function solve(array = []) {
    let consequenceCounter = 0;
    let lastNumber;
    let lastConsequences=0;
    let resultArr=[];
    
    for (let i = 0; i < array.length; i++) {
        currentNumber = Number(array[i]);

        if (currentNumber === lastNumber) {
            consequenceCounter++;
            
            if(consequenceCounter>lastConsequences){
                consequenceNum = currentNumber;
                lastConsequences=consequenceCounter;
            }
        } else {
            lastNumber = currentNumber;
            consequenceCounter=0;

        }


    }
    for (let i = 0; i <= lastConsequences  ; i++) {
        resultArr.push(consequenceNum);
        
    }
console.log(resultArr.join(` `));


}
solve([0,1,1,5,2,2,6,3,3]);