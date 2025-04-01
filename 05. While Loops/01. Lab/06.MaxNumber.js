function maxNumber(inputArray) {
    let input = inputArray[0];
    let index = 1;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (input !== "Stop") {
        let currentNum = Number(input);

        if (currentNum > maxNum) {
            maxNum = currentNum;
        }

        input = inputArray[index];
        index++;
    }
    console.log(maxNum);
}