const array = [10, 15, 9, 8];
const k = 17;
let result = {};
console.log(
(function () {
    for (let i of array){
        if(!result[k - i]){
            result[k - i]= i
        }
        console.log("🚀 ~ file: solution.js ~ line 13 ~ result[k - i]", result[k - i])
        if(result[i]) return true
    }
    return false
  })()
)
