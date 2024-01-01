// Import NPM Package
const _ = require("underscore");


// Call appropriate function from the NPM package to solve the assignment

/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "Java"
 */
// First Answer 
const array = ["Java", "Javascript", "Typescript"];
const result = _.contains(array, "Java");
console.log(result);


/**
 * Print out the result if ["Java", "Javascript", "Typescript"] this array 
 * contains "C++"
 */
// Second Answer
const array2 = ["Java", "Javascript", "Typescript"];
const result2 = _.contains(array2, "C++");
console.log(result2);
