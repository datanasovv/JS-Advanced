function charactersinRange(start, end) {
    let startVal = start.charCodeAt(0);
    let endVal = end.charCodeAt(0);
    if (startVal > endVal) {
        let temp=startVal;
        startVal=endVal
        endVal=temp;
    }
    let output='';
    for (let i = startVal+1; i < endVal; i++) {
        output+=String.fromCharCode(i) + ' ';
        
    }

console.log(output);


}
charactersinRange('a', 'd');