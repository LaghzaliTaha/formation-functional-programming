const x=30;
const y=60;
const add = (x,y) => x+y;
const substract = (x,y) => x-y;

const combineXandY = funct => funct(x,y);
console.log(combineXandY(add),combineXandY(substract),combineXandY(Math.max))