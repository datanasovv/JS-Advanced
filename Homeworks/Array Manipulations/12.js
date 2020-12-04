function solve(input) {
    input.shift();

    let pattern = /@#{1,}([A-Z][a-zA-Z0-9]{4,}[A-Z])@#{1,}/g;

    for (const line of input) {
        let match = [...line.matchAll(pattern)][0];
        if (match !== undefined) {
            let barcode = match[1];
            let partByPart = barcode.split("");
            let productGroup = '';


            for (const char of partByPart) {
                let isNumber = Number(char);
                if (isNumber * 1 === isNumber) {
                    productGroup += isNumber;
                }

            }
            if (productGroup === '') {
                productGroup = '00';

            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log('Invalid barcode');

        }

    }
}


solve(

    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
    ]
)