function factorialDevision(numOne,numTwo){
    function factorial(num){
        let res=1;
        for(let i=1;i<=num;i++){
            res*=i;
        }
        return res;
    }
    let resultOne=factorial(numOne);
    let resultTwo=factorial(numTwo);
}
factorialDevision(2,5)