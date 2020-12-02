function charToString(char1,char2,char3){
if(typeof char1===`string`&&typeof char2===`string`&&typeof char3==='string'){
    let result='';
result+=`${char1}${char2}${char3}`
console.log(result);
}else{
    char1=char1.toString();
    char2=char2.toString();
    char3=char3.toString();
    result+=`${char1}${char2}${char3}`
    console.log(result);
    

}
    

}
charToString(`a`,`b`,`c`);