import readline from "node:readline";

const cache = new Map<string, number>();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function askQuestion(question):Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (input) => resolve(input));
  });
}

function validateInput(message){
    const a =askQuestion(message)
    
}

async function performOperation(operartion){
    const a = await validateInput("Enter the first number: ");
    const b = await validateInput("Enter the second number: ");
        switch(operartion){
        case 
    }
}


async function loop() {
  const op = await askQuestion("Enter the operartion");
  switch (op.toLowerCase()) {
    case "add":
      await performOperation("add");
      break;
    case "subtract":
      await performOperation("subtract");
      break;
    case "multiply":
      await performOperation("multiply");
      break;
    case "divide":
      await performOperation("divide");
      break;
    case "exit":
      process.exit(0);
      break;
    default:
      console.log("Invalid operation.");
  }
  loop();
}
