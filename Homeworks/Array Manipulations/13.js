function solve(input) {
    let password = input.shift();
    let line = input.shift();
    while (line !== "Done") {
      let [command, index, length] = line.split(" ");
      switch (command) {
        case "TakeOdd":
          oldPassword = password;
          password = "";
          for (let i = 1; i < oldPassword.length; i++) {
            let oddCh = oldPassword[i];
            if (i % 2 !== 0) {
              password += oddCh;
            }
          }
          console.log(password);
          break;
        case "Cut":
          let chToCut = password.substr(index, length);
          password = password.replace(chToCut, "");
          console.log(password);
          break;
        case "Substitute":
          if (password.includes(index)) {
            while (password.includes(index)) {
              password = password.replace(index, length);
            }
            console.log(password);
          } else {
            console.log(`Nothing to replace!`);
          }
          break;
      }
      line = input.shift();
    }
    console.log(`Your password is: ${password}`);
  }
   
  solve([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done",
  ]);