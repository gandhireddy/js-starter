// There are six built-in data types. One additional data type in ES6
console.log(typeof true); // boolean
console.log(typeof 42); // number
console.log(typeof "HI"); // string
console.log(typeof undefined) // undefined

console.log(typeof {a:2}); // object
console.log(typeof [1,2,3]); // object

console.log(typeof null) // object

console.log(typeof Symbol()) // symbol - new in ES6

// The typeof operator always returns a string.

// function - considered as sub-type of object with callable feature.
// Hence function is called 'callable' object
console.log(typeof function abc(){})  // function

var func = function(a,b,c){}

// The function object has a length property set to the number of formal parameters 
// it is declared with.
console.log("Number of parameters for function is "+func.length);


// In JavaScript, variables don't have types -- values have types. 
// Variables can hold any value, at any time.

// Variables that have no value currently, actually have the undefined value. 
// Calling typeof against such variables will return "undefined"
var a;
console.log(typeof a);

// An "undefined" variable is one that has been declared in the accessible scope, 
// but at the moment has no other value in it. 
// By contrast, an "undeclared" variable is one that has not been formally declared 
// in the accessible scope.
// The typeof operator returns "undefined" even for "undeclared" (or "not defined") variables. 
//  This is a special safety guard in the behavior of typeof.
var b;
console.log(typeof b);
console.log(typeof c);

