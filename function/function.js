console.log('hello javascript');

console.log('today we will learning function');

function hello(){
    console.log('i am a developer');
}
//
hello();//function ke call kora
function moneybag(){
    var money=4600;
    console.log('I have ' + money+ ' taka');
}
moneybag();
//
function addMachine(input1, input2){
    let sum=input1+input2;
    console.log('Sum is = '+sum);
    return sum;
}
addMachine(75,79);
const result=addMachine(70,78);
console.log(result);
//
//prac 1
function less(less1, les2){
    amount=less1-les2;
    console.log('amount = '+amount);
    return amount;
}
less(33,28);
const lessResult=less(37,5);
console.log(lessResult);
//prac 2
function multiply(mul1,mul2){
    let mulAmount=mul1*mul2;
    console.log('multiply = '+mulAmount);
    return(mulAmount);
}
multiply(45,4);
 var total= multiply(20,5);
 console.log(total);
 // prac 3
 function divisible(div1,div2){
   var divAmount=div1/div2;
   console.log('divResult = '+divAmount);
   return(divAmount);
 }
 divisible(25,5);
let Answer= divisible(56,8);
console.log(Answer);