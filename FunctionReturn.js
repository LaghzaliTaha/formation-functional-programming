const double = (x) => 2*x
const triple = (x) => 3*x
const quadriple = (x) => 4*x
const impartialMultiplicator = (x,y) => x*y
impartialMultiplicator(2,3)
const multiplicator = n => x=> n*x
multiplicator(3)(4)
const leDouble = multiplicator(2)
const letriple = multiplicator(3)
const lequadribple = multiplicator(4)

console.log(letriple(4))
console.log(multiplicator(3)(4))

