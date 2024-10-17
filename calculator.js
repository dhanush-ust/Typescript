function add(num1, num2) {
    return num1 + num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    if (num2 < 1) {
        return "num2 can not be zero";
    }
    else {
        return num1 / num2;
    }
}
var num1 = -7;
var num2 = -5;
console.log("add ==> " + add(num1, num2));
console.log("multi  ==> " + multiplication(num1, num2));
console.log("divide  ==> " + divide(num1, num2));
console.log("subtract  ==> " + subtract(num1, num2));
