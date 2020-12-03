function addAndSubtrack(a, b, c) {
    function sum(a, b) {
        return a + b;
    }
    function subtrac(a, b) {
        return a - b;
    }
    let sumResult = sum(a, b);
    let Res = subtrac(sumResult,c );
    console.log(Res);
    
}
addAndSubtrack(1,
    17,
    30);