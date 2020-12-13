function solve(input) {
    let startPass = input.shift();
    let outputPass = '';
    for (const line of input) {
        let [command, index, startIndex, endIndex] = line.split(">>>");
        switch (command) {
            case 'Contains':
                if (startPass.includes(index)) {
                    console.log(`${startPass} contains ${index}`);
                } else {
                    console.log("Substring not found!");
                }
                break;
            case 'Flip':
                if (index === 'Upper') {
                    let indexToEnd = Number(endIndex) - Number(startIndex);
                    let charToTranf = startPass.substr(startIndex, indexToEnd);
                    startPass = startPass.replace(charToTranf, charToTranf.toUpperCase());
                    console.log(startPass);


                } else if (index === 'Lower') {
                    let indexToEnd = Number(endIndex) - Number(startIndex);
                    let charToTranf = startPass.substr(+startIndex, indexToEnd)
                    startPass = startPass.replace(charToTranf, charToTranf.toLowerCase());
                    console.log(startPass);

                }

                break;
            case 'Slice':
                let LastIndex = Number(startIndex) - Number(index)
                let charToRemove = startPass.substr(index, LastIndex);
                startPass = startPass.replace(charToRemove, "");
                console.log(startPass);
                break;
            case 'Generate':
                console.log(`Your activation key is: ${startPass}`);

                break;
        }
    }
}
solve(
    [
        'abcdefghijklmnopqrstuvwxyz',
        'Slice>>>2>>>6',
        'Flip>>>Upper>>>3>>>14',
        'Flip>>>Lower>>>5>>>7',
        'Contains>>>def',
        'Contains>>>deF',
        'Generate',
    ]

)