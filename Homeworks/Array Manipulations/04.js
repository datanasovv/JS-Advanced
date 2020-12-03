function oddandEvenSum(number) {
    let ourNum =String(number);
    let evenSum=0;
    let oddSum=0;
    let currentNum;
    for(let i=0;i<ourNum.length;i++){
        currentNum=Number(ourNum[i])
        if(currentNum%2===0&&currentNum!==0){
            evenSum+=currentNum;
        }else{
            oddSum+=currentNum;
        }
        
    }
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}
oddandEvenSum(1000435);