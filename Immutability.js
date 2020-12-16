// problem of mutation

const array = ["anass",'amine','mahdi']

console.log(array);

const logArrElements = (arr) =>{
    while (arr.length>0){
        console.log(arr.shift());
    }
}
logArrElements(array);
console.log(array);
// expected to return the const but it return an empty array

//second example without mutating the state
const state = ["element1","element2","element3"]
console.log(state)
const logArrElementsWithoutMutation = (arr) =>{
    arr = [...arr]
    while (arr.length>0){
        console.log(arr.shift());
    }
}
logArrElementsWithoutMutation(state);
console.log(state);


