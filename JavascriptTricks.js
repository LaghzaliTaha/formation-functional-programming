// init argument at call
const formatAmount= (amount, devise = 'MAD') => {
    return `${amount} ${devise}`
}
console.log(formatAmount(1200))
console.log(formatAmount(1200,'eur'))
//check variable
// value?.element  === if(value!==undefined && value!=null){value.element}
//example of reuse react svg component
//previous component :
const Bag = () => (
    <Svg
        style={{ marginRight: 8, marginBottom: -2 }}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-briefcase"
    >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Svg>
)
//component after modifyng to reuse it without modifying occurences
const Bag = ({ style }) => (
    <Svg
        style={{ marginRight: 8, marginBottom: -2, ...style }}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFF"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-briefcase"
    >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </Svg>
)