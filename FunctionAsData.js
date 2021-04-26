const fetchDataMock = () => ({name:'taha', age:29})
const fetchData = () =>({name:'ahmed',age:66})
const envDev= true

const getData = ()=>  envDev ? fetchDataMock() : fetchData()

console.log(getData())
// example two
const add3 = (x) => x+3
const double = (x) => 2*x
const add5 = (x) =>5+x

const arr = [
    add3,
    double
]
const arrAdd5 = [
    ...arr,
    add5
]
let number=12;
arr.forEach(func=> number= func(number))
arrAdd5.forEach(func=> number= func(number))
console.log(number)
