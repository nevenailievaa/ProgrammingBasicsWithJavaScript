function accountBalance(array) {
    let index = 0;
    let input = array[index];
    let sum = 0;

    while (input !== "NoMoreMoney") {
        let money = Number(input);

        if (money < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${money.toFixed(2)}`);
        sum += money;

        index++;
        input = array[index];
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}