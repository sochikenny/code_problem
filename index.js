//Time Complexity is O(N) where is the length of the string
//Space Complexity is O(1)

function calculate(str) {
  if (!str) return null;

  let newString = str.split(" ");

  let result, newResult;
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === "*" || newString[i] === "+" || newString[i] === "-") {
      result = operatorHelper(Number(newString[i - 1]), Number(newString[i + 1]),
        newString[i]
      );
      newString[i + 1] = result;
      newResult = newString[i + 1];
    }
  }
  return str + " " + "=" + " " + newResult.toString();
}

function operatorHelper(x, y, operation) {
  if (operation === "*") {
    return x * y;
  }
  if (operation === "+") {
    return x + y;
  }
  if (operation === "-") {
    return x - y;
  }
}

// Test inputs 
console.log(calculate(""))
console.log(calculate("2 * 2"))
console.log(calculate("12 - 8"))
console.log(calculate("12 + 10"))
console.log(calculate("3 + 1 - 2"))
console.log(calculate("4 - 2 + 1"))
console.log(calculate("3 * 4 * 2 * 1"))
console.log(calculate("12 * 10 - 2"));
console.log(calculate("12 + 10 - 2"));
console.log(calculate("12 - 10 - 2"));
console.log(calculate("12 * 10 + 2 - 4 + 20"));




/*
INITIAL SOLUTION (NON-OPTIMAL)

// Time Complexity: O(N) where N is the input string
// Space Complexity: O(N)
function calculate(str){
    if(!str) return null
    
    let newStr = str.split(' ')
    let element, answer, equal = '=', result = ''

    for(let i = 0; i < newStr.length; i++){
        element = newStr[i]
        if(element === "*" || element === "+" || element === "-"){
          answer = operatorHelper(Number(newStr[i - 1]), Number(newStr[i + 1]), element)
        }
    }
    
    for(let j = 0; j < newStr.length; j++){
        result += newStr[j] + ' '
    }
        result = result + ' ' + equal + ' ' + answer
        return result.toString() 
}
    
    
    //Helper function for the different operators used
    function operatorHelper(x, y, operation){
        if(operation === "*"){
            return x * y
        }
        if(operation === "+"){
            return x + y
        }
        if(operation === "-"){
            return x - y
        }
    }

console.log(calculate("100 - 2"))
*/
