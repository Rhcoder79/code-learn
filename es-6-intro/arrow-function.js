function add(num1,num2){
   console.log( num1*2+num2*3)
}
add(4,5)
const addition=function (num1,num2){
    const result =num1+num2
    console.log(result)
}
addition(24,45)
//arrow function
const add2=(num1,num2)=> num1+num2
const result=add2(13,12)
console.log(result)
const multiply=(num1,num2)=>num1*num2
const total=multiply(12,5)
 console.log(total)
const count=(a,b)=>a*b
const multi=count(24,4)
console.log(multi)
const sumAll=(a=0,b=0,c=0,d=0,e=0,f=0)=>a+b+c+d+e+f; //default parameter
const sums=sumAll(12,8,4,6)
console.log(sums);
const bigger=(a,b)=>a>b
const isBig=bigger(8,12)

console.log(isBig)

//multi line arrow function
const doMath=(x,y)=>{
    const makeDouble=x*2;
    const againDouble=y*3
    const result=makeDouble+againDouble
    return result
}
const equal=doMath(3,5)
console.log(equal)