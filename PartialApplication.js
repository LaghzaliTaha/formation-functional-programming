const createMultiplier = x => y => x*y
const doubleOf = createMultiplier(2)
console.log(doubleOf(6))
// the same to :
console.log(createMultiplier(2)(6))

// another example
const addPartial = x=> y=> z=> x+y+z
const add5and6 = addPartial(5)(6)
console.log(add5and6(10))
