function password(input) {
    let username = input[0];
    let password = input[1];
    
    let index = 2;
    let inputPassword = input[index];

    while (inputPassword !== password) {
        index++;
        inputPassword = input[index];
    }

    console.log(`Welcome ${username}!`);
  }
