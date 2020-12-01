function commonElements(firstArr = [], secondArr = []) {
    for (let i = 0; i < firstArr.length; i++) {
        let element=firstArr[i];
        for(j=0;j<secondArr.length;j++){
            let elementSecond=secondArr[j];

            if(element===elementSecond){
                console.log(elementSecond);
                
            }
        }


    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])