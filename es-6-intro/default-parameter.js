function sum(num1,num2){
    const total=num1+num2;
    console.log(num1,num2,total)
}

sum(10);
sum(10,20)
sum(26,21,44,75,78)
sum();
//default

function add(num1,num2=0){
    const total=num1+num2;
    console.log('default:', num1,num2,total)
}
add(10)
add(28,45)
add()

function adding(num1=0,num2=0){
    const total=num1+num2;
    console.log(num1,num2,total)
}
adding(27)
adding()
adding(33,55)
adding(28,33,44)


function  multiply(num1=1,num2=1) //parameter
{
    const result=num1*num2;
    console.log(result)
}
multiply(10,10)  //arguments
multiply(12)
//default example
/*
add,multiply -->0
multiply -->1
string --> ''
array -->[]
object -->{}
*/

