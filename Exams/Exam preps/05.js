function solve(input) {
    let digits = input[0].match(/\d/g);
    let threshold = 0;
    if (digits) {
        threshold = digits.map(Number).reduce((acc, curr) => acc * curr, 1)
    } else {
        threshold = 0;
    }
    console.log(`Cool threshold: ${threshold}`);
    let emojiPat = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
    const emojis = input[0].matchAll(emojiPat);
    if (emojis) {
        let coolEmoji = [];                         
        let counterEmoji = 0;
        for (const emj of emojis) {
            counterEmoji++;
            const emojiSum = emj[2].split("").reduce((sum, curEmj) => sum + curEmj.charCodeAt(0), 0);
            
            
            if (emojiSum > threshold) {
                coolEmoji.push(emj[0])
            }
        }
        let output=`${counterEmoji} emojis found in the text. The cool ones are:`;
        coolEmoji.forEach(coolEmoji=>output+=`\n${coolEmoji}`);
        console.log(output);
        

    }


}
solve(
    [
        'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
    ]

)