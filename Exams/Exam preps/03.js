function solve(input) {
    input.shift();
    let pattern = /!([a-zA-z][a-zA-Z]{3})!:\[([a-zA-Z]*)\]/g;

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];
        if (matches) {
            let command = matches[1];
            let message = matches[2];
            let asciiSymb = [...message]
                .map(s => s.charCodeAt(0))
                .join(' ');
            console.log(`${command}: ${asciiSymb}`);
            
        } else {
            console.log('The message is invalid');

        }



    }

}
solve(['2',
    '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'
])