const double = (x) => 2*x
const triple = (x) => 3*x
const quadriple = (x) => 4*x
const impartialMultiplicator = (x,y) => x*y
impartialMultiplicator(2,3)

const letriple = multiplicator(3)
letriple(4)
const multiplicator = n => x=> n*x
multiplicator(3)(4)
const leDouble = multiplicator(2)
const letriple = multiplicator(3)
const lequadribple = multiplicator(4)
multiplicator(3)(4)
console.log(multiplicator(3)(4))

const multiplicator = n => x=> n*x

const addPartial = x=> y=> z=> x+y+z

const add5and6 = addPartial(5)(6)
console.log(add5and6(10))