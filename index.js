// code your solution here
// Define  saturdayFun function
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Call  saturdayFun function
console.log(saturdayFun());


// Define  mondayWork function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  
  // Call  mondayWork function
  console.log(mondayWork());
  

const fancyFn = wrapAdjective("fancy")
console.log(fancyFn("John")) // Output: "You are fancy John fancy!"
//function takes an adjective as an argument 
//and returns a new function that takes a name as an argument and returns 
//a string with the adjective wrapped around the name.



const wrapped = wrapAdjective("||")
console.log(wrapped("Bob")) // Output: "You are ||Bob||!"

const fancy = wrapAdjective("~")
console.log(fancy("Alice")) // Output: "You are ~Alice~!"

const defaultWrap = wrapAdjective()
console.log(defaultWrap("Sam")) // Output: "You are *Sam*!"
