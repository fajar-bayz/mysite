const calculatorScreen = document.querySelector('.cal-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=> {
    number.addEventListener("click", (event)=> {
        updateScreen(event.target.value)
    })
    
})

let prevNumber =''
let calculationOperator =''
let currentNumber = '0'

const inputNumber = (number) => {
    if(currentNumber==='0'){
        currentNumber = number
    }
    else {
        currentNumber += number
    }
    
}
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if(calculationOperator===''){
        prevNumber = currentNumber
    }   
    calculationOperator = operator
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=> {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result =''
    switch(calculationOperator){
        case "+":
            result=parseFloat(prevNumber)+parseFloat(currentNumber)
            break
        case "-":
            result=parseFloat(prevNumber)-parseFloat(currentNumber)
            break
        case "*":
            result=parseFloat(prevNumber)*parseFloat(currentNumber)
            break
        case "/":
            result=parseFloat(prevNumber)/parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber=result
    calculationOperator = ''
}
const clearAll = ()=> {
    prevNumber=''
    calculationOperator= ''
    currentNumber= '0'
}

clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', ()=>{
    clearAll()
    updateScreen(currentNumber)
})



const decimal = document.querySelector('.decimal')

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber+=dot
}

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

