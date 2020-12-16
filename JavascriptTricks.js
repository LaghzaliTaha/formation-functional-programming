// init argument at call
const formatAmount= (amount, devise = 'MAD') => {
    return `${amount} ${devise}`
}
console.log(formatAmount(1200))
console.log(formatAmount(1200,'eur'))
//check variable
// value?.element   if(value!==undefined && value!=null){value.element}