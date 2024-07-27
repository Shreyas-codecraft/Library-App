const args = process.argv[2].split(" ");

function add(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

function multiply(a: number, b: number) {
  return a * b;
}

function division(a: number, b: number) {
  if (b === 0) {
    throw new Error("Number cannot be divisible by zero");
  }
  return a / b;
}

const a = +args[0];
const op = args[1];
const b = +args[2];

let result;

try {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Arguments must be a type number");
  }

  switch (op) {
    case "+": {
      result = add(a, b);
      break;
    }

    case "-": {
      result = subtract(a, b);
      break;
    }

    case "*": {
      result = multiply(a, b);
      break;
    }

    case "/": {
      result = division(a, b);
      break;
    }
  }
  if (result && result % 1 > 0) {
    // or (result?.toString().includes(".")) //
    console.log("Result is : ", result?.toFixed(4));
  } else {
    console.log("Result is : ", result);
  }
} catch (err) {
  console.error((err as Error).message);
}

console.log();
