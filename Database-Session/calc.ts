import readline from "node:readline";

const cache = new Map<string, number>();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, (input) => {
      resolve(input.trim());
    });
  });
};

process.on("exit", (...args) => {
  console.log("\n\n Thank you!:wave: \n");
  rl.close();
});

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

/**
 * Generates a key for the result to be stored in cache. sorts the parameters for commutative operations and keeps order for non-commutative.
 */
function generateCacheKey(operation: string, a: number, b: number): string {
  if (operation === "add" || operation === "multiply") {
    const sortedNumbers = [a, b].sort((x, y) => x - y);
    return `${operation}:${sortedNumbers[0]}:${sortedNumbers[1]}`;
  } else {
    return `${operation}:${a}:${b}`;
  }
}

/**
 * Asks user to enter parameter and validates and keeps asking until valid input is given.
 */
const validateInput = async (question: string): Promise<number> => {
  while (true) {
    const input = await askQuestion(question);
    const number = parseFloat(input);
    if (!isNaN(number)) {
      return number;
    }
    console.log("Invalid input. Please enter a valid number.");
  }
};

/**
 * Takes user input and checks for cache if result not found performs operation and stores it in the cache.
 */
const performOperation = async (operation: string) => {
  const a = await validateInput("Enter the first number: ");
  const b = await validateInput("Enter the second number: ");

  const cacheKey = generateCacheKey(operation, a, b);

  if (cache.get(cacheKey)) {
    console.log(`Cached Result: ${cache.get(cacheKey)}`);
    return loop();
  }

  let result: number;
  try {
    switch (operation.toLowerCase()) {
      case "add":
        result = add(a, b);
        break;
      case "subtract":
        result = subtract(a, b);
        break;
      case "multiply":
        result = multiply(a, b);
        break;
      case "divide":
        result = divide(a, b);
        break;
      default:
        console.log(
          "Invalid operation. Please use add, subtract, multiply, or divide."
        );
        return loop();
    }
    cache.set(cacheKey, result);
    console.log(`Result: ${result}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  return loop();
};

async function loop() {
  const op = await askQuestion(
    `What operation would you like to perform? (add, subtract, multiply, divide, exit): `
  );
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

loop();
