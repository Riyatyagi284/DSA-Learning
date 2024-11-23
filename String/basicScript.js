console.log("Hello from js string revision");

let text="Hello from";
// template strings
const text2 = `Hello from          "John".`;

// string object
let text3 = new String(text); // 

// js string methods -- for accessing characters
console.log(text2.trim().length);
console.log(text2.at(5));
console.log(text2.charCodeAt(3)); // returns the ascii values
console.log(text2[4])

// extracting string part 
console.log(text2.slice(1,4)); //  1,2,3
console.log(text2.slice(1)); //  1,2,3
console.log(text2.substring(1,4));

// difference between slice and substring
// slice can take negative values as well but in case of substring it replace the negative value to 0.

// case conversion
console.log(text2.toUpperCase());
console.log(text2.toLowerCase());

// concat
console.log(text2.concat(" ",text));

let newText = text2.trim();
console.log("newText", newText);