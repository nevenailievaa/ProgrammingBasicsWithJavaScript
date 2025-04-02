function magicNumbers(startInterval, endInterval, magicNumbers){
    let combinationsCounter = 0;
    let combinationFound = false;

    for(let i = startInterval; i <= endInterval; i++){
        for(let j = startInterval; j <= endInterval; j++){
            combinationsCounter++;
            let sum = i + j;

            if (sum === magicNumbers) {
                combinationFound = true;
                console.log(`Combination N:${combinationsCounter} (${i} + ${j} = ${sum})`);
                break;
            }
        }
        if(combinationFound){
            break;
        }
    }

    if(combinationFound != true){
        console.log(`${combinationsCounter} combinations - neither equals ${magicNumbers}`);
    }
}