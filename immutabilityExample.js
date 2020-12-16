const double = x => 2*x
const minusOne = x =>x-1
const addTwo = x => x+2
const arr=[double,minusOne,addTwo]
let number=41
arr.forEach(e=>number=e(number))
console.log(number)
const createMultiplier = x => y => x*y
const double = createMultiplier(2)
