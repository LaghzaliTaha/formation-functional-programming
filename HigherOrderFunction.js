const divide = (x,y) => {
    return x/y
}
const secondArgumentIsnotZero = funct =>
    (...args) =>{
        if(args[1] ===0) {
            console.log('zero not allowed');
            return null
        }
        return funct(...args)
    }

const divideCheck0 = secondArgumentIsnotZero(divide)
console.log(divideCheck0(3,5))
