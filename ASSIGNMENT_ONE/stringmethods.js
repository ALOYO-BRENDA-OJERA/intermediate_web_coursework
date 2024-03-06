// Assume some string content
let originalString = "   woman in technology!   ";

// substring(start, end): Extract a portion of the string
let substringResult = originalString.substring(3, 8);
console.log("substring:", substringResult);

// substr(start, length): Extract a portion of the string
let substrResult = originalString.substr(3, 5);
console.log("substr:", substrResult); 

// replace(): Replace part of a string with another string
let replaceResult = originalString.replace("technology", "Universe");
console.log("replace:", replaceResult);

// replaceAll(): Replace all occurrences of a string with another string
let replaceAllResult = originalString.replaceAll("n", "N");
console.log("replaceAll:", replaceAllResult); 

// toUpperCase(): Convert the string to uppercase
let upperCaseResult = originalString.toUpperCase();
console.log("toUpperCase:", upperCaseResult); 

// toLowerCase(): Convert the string to lowercase
let lowerCaseResult = originalString.toLowerCase();
console.log("toLowerCase:", lowerCaseResult);

// concat(): Concatenate strings
let concatResult = originalString.concat(" Have a nice day!");
console.log("concat:", concatResult);

// trim(): Remove leading and trailing whitespace
let trimResult = originalString.trim();
console.log("trim:", trimResult);
// trimStart(): Remove leading whitespace
let trimStartResult = originalString.trimStart();
console.log("trimStart:", trimStartResult); 

// trimEnd(): Remove trailing whitespace
let trimEndResult = originalString.trimEnd();
console.log("trimEnd:", trimEndResult); 

// padStart(): Pad the string with another string until it reaches a specified length
let padStartResult = originalString.padStart(30, '*');
console.log("padStart:", padStartResult);

// padEnd(): Pad the string with another string until it reaches a specified length
let padEndResult = originalString.padEnd(30, '*');
console.log("padEnd:", padEndResult);

// charAt(): Get the character at a specified index
let charAtResult = originalString.charAt(7);
console.log("charAt:", charAtResult); 

// charCodeAt(): Get the Unicode value of the character at a specified index
let charCodeAtResult = originalString.charCodeAt(7);
console.log("charCodeAt:", charCodeAtResult);

// split(): Split a string into an array of substrings based on a delimiter
let splitResult = originalString.split(" ");
console.log("split:", splitResult); 
