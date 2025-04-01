function password(input) {
    let username = input[0];
    let password = input[1];
    let inputPassword = input[2];
    let index = 3;

    while (inputPassword !== password) {
        inputPassword = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);
  }