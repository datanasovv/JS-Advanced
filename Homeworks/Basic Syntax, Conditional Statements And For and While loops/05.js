function reversedChars(char1, char2, char3) {
    let result='';
    if (typeof char1 === 'string' &&typeof char2 === 'string' &&typeof char3 === 'string') {
        result=`${char3} ${char2} ${char1}`;
    }
    console.log(result);
    
}
reversedChars('A','B','C')