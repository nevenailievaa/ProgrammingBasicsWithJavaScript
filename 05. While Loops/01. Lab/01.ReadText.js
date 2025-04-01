function readText(input){
    let index = 0;

    while (true) {
        let text = input[index];

        if (text === "Stop") {
            break;
        }

        console.log(text);
        index++;
    }
}