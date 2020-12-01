function maxInt(array = []) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let isTopInt = true;
        let currentElement = array[i];
        let rightElementsArray = array.slice(i + 1);

        for (j = 0; j < rightElementsArray.length; j++) {
            if (currentElement <= rightElementsArray[j]) {
                isTopInt = false;
                break;

            }
        }
        if (isTopInt === true) {
            resultArray.push(currentElement);

        }
    } console.log(resultArray.join(` `));
}
    maxInt([1, 4, 3, 2]);
