/*
1. What is Scope in JavaScript?
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables and functions. In other words, scope defines where variables and functions can be accessed or referenced in your code.

There are two main types of scope in JavaScript:

1. Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

2. Local Scope: Variables declared within a function or block have local scope. They can only be accessed within that function or block.

Additionally, JavaScript has block scope {} introduced with ES6 using the 'let' and 'const' keywords, which allows variables to be scoped to the nearest enclosing block (e.g., inside loops or conditionals).
*/

// global scope example
var globalVar = "I am a global variable";

function checkGlobalScope() {
  console.log(globalVar); // Accessible here
}

checkGlobalScope(); // Output: I am a global variable
console.log(globalVar); // Accessible here too, Output: I am a global variable

// local scope example
function checkLocalScope() {
  var localVar = "I am a local variable";
  console.log(localVar); // Accessible here
}

checkLocalScope(); // Output: I am a local variable
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// block scope example
{
  let blockScopedVar = "I am block scoped";
  console.log(blockScopedVar); // Accessible here
}

// console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined


// Hoisting in JavaScript
/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

However, only the declarations are hoisted, not the initializations. This can lead to unexpected behavior if not understood properly.

1. Variable Hoisting:
   - Variables declared with 'var' are hoisted to the top of their function or global scope, but they are initialized with 'undefined' until the line of code where they are assigned a value is executed.
   - Variables declared with 'let' and 'const' are also hoisted, but they remain in a "temporal dead zone" until their declaration is encountered, meaning you cannot access them before their declaration.

2. Function Hoisting:
   - Function declarations are hoisted to the top of their containing scope, allowing you to call them before they appear in the code.
   - Function expressions (including arrow functions) are not hoisted in the same way, and they behave like variables declared with 'var', 'let', or 'const'.
*/

// Variable Hoisting Example
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

console.log(hoistedLet); // Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";

// Function Hoisting Example
hoistedFunction(); // Output: I am a hoisted function

function hoistedFunction() {
  console.log("I am a hoisted function");
}

// Function Expression Example
// nonHoistedFunction(); // Uncaught TypeError: nonHoistedFunction is not a function

const nonHoistedFunction = function() {
  console.log("I am not hoisted");
};
nonHoistedFunction(); // Output: I am not hoisted

// Arrow Function Example
// nonHoistedArrowFunction(); // Uncaught TypeError: nonHoistedArrowFunction is not a function

const nonHoistedArrowFunction = () => {
  console.log("I am not hoisted");
};
nonHoistedArrowFunction(); // Output: I am not hoisted



