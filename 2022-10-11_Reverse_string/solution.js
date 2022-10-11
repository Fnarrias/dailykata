const functionInput  = "String"

function reverseString(inputString) {
    let result = ""
    for(let i in inputString){
        result += inputString[(inputString.length - 1) - i]      
    }
    return result
}

const solution = reverseString(functionInput)
console.log("🚀 ~ file: solution.js ~ line 12 ~ solution", solution)
