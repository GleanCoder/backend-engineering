/*

1. functions are blocks of code designed to perform a particular task. A function is executed when "something" invokes it (calls it).

- There are three ways to define functions in JavaScript:
1. Function Declaration
2. Function Expression
3. Arrow Functions
*/

// Function Declaration 
// A function declaration defines a named function. It can be called before it is defined in the code due to hoisting.
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
// A function expression defines a function as part of a larger expression. It can be anonymous or named and is not hoisted, so it must be defined before it is called.
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// Arrow Function
// Arrow functions provide a shorter syntax for writing functions. They are always anonymous and do not have their own 'this' context. 
// And are not hoisted, so they must be defined before they are called.

const multiply = (x, y) => x * y;

console.log(multiply(4, 6)); // Output: 24



//IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that runs as soon as it is defined. It is often used to create a new scope and avoid polluting the global namespace.
// means when compiler sees the function, it will execute it immediately. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
(function() {
  console.log("This is an IIFE!");
})(); // Output: This is an IIFE!