const map = (arr,func) =>
    arr.reduce((acc,x)=>[
        ...acc,
        func(x)
    ],[])
console.log(map([1,2,3],x=>-x))