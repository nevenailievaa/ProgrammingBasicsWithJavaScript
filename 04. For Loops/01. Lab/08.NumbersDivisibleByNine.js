function numbersDivisibleByNine(start, end){
    let sum = 0;
    
    for (let num = start; num <= end; num++){
        if (num % 9 === 0){
            sum += num;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let num = start; num <= end; num++){
        if (num % 9 === 0){
            console.log(num);
        }
    }
}