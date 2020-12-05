function solve(input) {
    let message = input.shift();

    for (const commands of input) {
        let [command, index, replacement] = commands.split(":|:")
        switch (command) {
            case 'InsertSpace':
                let indexOfSpace = message.split("");
                let indexOf = indexOfSpace[index];
                message = message.replace(indexOf, ' ' + indexOf)
                console.log(message);

                break;
            case 'Reverse':
                if (message.includes(index)) {
                    let indexLength = index.length;
                    let indexStart = message.indexOf(index)
                    let string = message.substr(indexStart, indexLength);
                    message = message.replace(string, "");
                    let reversedString = string.split("");
                    let prepString = '';
                    for (let i = reversedString.length - 1; i >= 0; i--) {
                        let char = reversedString[i];
                        prepString += char;
                    }
                    message = message + prepString;
                    console.log(message);


                } else {
                    console.log('error');

                }
                break;
            case 'ChangeAll':
                while (message.includes(index)) {
                    message = message.replace(index, replacement);
                }
                console.log(message);

                break;
            case 'Reveal':
                console.log(`You have a new text message: ${message}`);

                break;
        }
    }
}
solve(
    [
        'awawaww',
        'Reverse:|:aw',
        'Reveal'
    ]


)