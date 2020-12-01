function mergeArrays(arrOne = [], arrTwo = []) {
    let resultArray = [];
    for (let i = 0; i < arrOne.length; i++) {
        let element = arrOne[i];
        if (i % 2 === 0) {
            element=Number(element);
            resultArray.push(element+Number(arrTwo[i]));
        }else{
            resultArray.push(`${element}${arrTwo[i]}`)
        }
    }
    console.log(resultArray.join(` - `));
    
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])