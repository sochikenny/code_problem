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