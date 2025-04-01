function minNumber(inputArray) {
    let input = inputArray[0];
    let index = 1;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (input !== "Stop") {
        let currentNum = Number(input);

        if (currentNum < minNum) {
            minNum = currentNum;
        }

        input = inputArray[index];
        index++;
    }
    console.log(minNum);
}