function traveling(input) {
    let index = 0;

    while (input[index] !== "End") {
        let destination = input[index];
        index++;
        let budget = Number(input[index]);
        index++;
        let savings = 0;

        while (savings < budget) {
            let currentSaving = Number(input[index]);
            index++;
            savings += currentSaving;
        }

        console.log(`Going to ${destination}!`);
    }
}