function sum(number) {
    let sum = 0;
    let a = number.toString();
    for (i = 0; i < a.length; i++) {
        let currentNumber=Number(a[i]);
        sum+=currentNumber
    }
    console.log(sum);
    
}
sum(543)