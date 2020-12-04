function solve(input) {

    let givenPass = input.shift();
    let newRawPass = '';
    let oddPass = '';
    let subPass = '';



    for (const lines of input) {
        let [command, element, newElement] = lines.split(" ");
        if (command === "TakeOdd") {
            newRawPass = givenPass;
            givenPass = '';
            for (let i = 1; i < newRawPass.length; i += 2) {
                givenPass += newRawPass[i];

            }
            console.log(givenPass);

        } else if (command === "Cut") {

            let cutPass = givenPass.substr(element, newElement)
            givenPass = givenPass.replace(cutPass, "");
            console.log(givenPass);

        } else if (command === "Substitute") {

            if (givenPass.includes(element)) {
                givenPass = givenPass.split(element).join(newElement)
                console.log(givenPass);


            } else {
                console.log("Nothing to replace!");

            }
        } else if (command === "Done") {
            console.log(`Your password is: ${givenPass}`);
        }
    }


}

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'

])