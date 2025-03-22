function passwordGuess(password) {
    let correctPassword = "s3cr3t!P@ssw0rd";

    if (correctPassword === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}