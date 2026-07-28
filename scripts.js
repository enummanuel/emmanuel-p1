// CALCULATOR FUNCTION
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

console.log("Testing Calculator");
console.log("Add (8 + 2):", add(8, 2));
console.log("Subtract (8 - 2):", subtract(8, 2));
console.log("Multiply (8 * 2):", multiply(8, 2));
console.log("Divide (8 / 2):", divide(8, 2));

//STRING METHODS
function formatName(name) {
  return name.toUpperCase();
}

function cleanInput(text) {
  return text.trim();
}

console.log("\n String Method Tests");
console.log("Format Name:", formatName("john emmanuel"));
console.log("Clean Input:", cleanInput("   hello world!   "));

//COMBINING FUNCTIONS
console.log("\nCombined Logic Test");
let rawInput = "   john emmanuel   ";
let cleaned = cleanInput(rawInput);

if (cleaned.length > 0) {
  console.log("Final Output:", formatName(cleaned));
}

//