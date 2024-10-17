function add(num1:number,num2:number):number
{
    return num1+num2;
}

function multiplication(num1:number,num2:number):number
{
    return num1*num2;
}

function subtract(num1:number,num2:number):number
{
    return num1-num2;
}

function divide(num1:number,num2:number):any
{
    if(num2<1)
    {
        return "num2 can not be zero"
    }
    else{
    return num1/num2;
    }
}

let num1:number=-7;
let num2:number=-5;
console.log("add ==> "+add(num1,num2))
console.log("multi  ==> "+multiplication(num1,num2))
console.log("divide  ==> "+divide(num1,num2))
console.log("subtract  ==> "+ subtract(num1,num2))
