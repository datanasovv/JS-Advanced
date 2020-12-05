function solve(input) {
    let message = input[0];
    let pattern = /(@|#)([a-zA-Z]{4,})\1/g;
    let validCount = 0;
    let mirrorCount = 0;
    let mirrorImages = [];


    var matches;
    matches = message.match(pattern);
    let i = 0;
    while (matches) {
        if (matches[i] && matches[i + 1]) {
            let word1 = matches[i];
            let word2 = matches[i + 1];
            i += 2;
            validCount += 2;


            let tempWord = word1.split("");
            let reversedWord = '';
            for (let i = tempWord.length; i > 0; i--) {
                reversedWord += tempWord[i - 1];

            }
            if (tempWord === reversedWord) {
                mirrorCount++;
                mirrorImages.push(`${word1} <=> ${reversedWord}`)

            }
        }
    }

    if (validCount === 0) {
        console.log(`No word pairs found!`);

    } else if (validCount > 0) {
        console.log(`${validCount} word pairs found!`);
        if (mirrorCount === 0) {
            console.log("No mirror words!");

        } else if (mirrorCount > 0) {
            console.log(mirrorImages.join(", "));

        }

    }


}
solve(
    [
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
)
