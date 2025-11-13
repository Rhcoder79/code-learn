function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function calculator(num1,num2,operation){
    if(operation==='+'){
        const result=add(num1,num2)
        return result;
    }else if(operation==='subtract'){
        return subtract(num1,num2);
    }else if(operation==='multiply'){
        return multiply(num1,num2);
    }else if(operation==='divide'){
        return divide(num1,num2);
    }else{
        return "only 'add','subtract','multiply','divide' can possible "
    }

}
const count=calculator(15,10,'+');
console.log(count);
