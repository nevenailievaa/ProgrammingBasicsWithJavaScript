function sumOfNumbers(numbersAsText) {
    let sum = 0;

    for (let i = 0; i < numbersAsText.length; i++) {
        sum += Number(numbersAsText[i]);
    }
    
    console.log(`The sum of the digits is:${sum}`);
}