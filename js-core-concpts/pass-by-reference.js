// all primitive values (number,string,boolean) always pass by value
function multiply(x,y){
    x=x+4;
    y=y+5;
    const mult=x*y;
    return mult;
}
const a=5;
const b=7;
console.log('before the function call',a,b)
const result=multiply(a,b)
console.log(result);
console.log('after the function call',a,b);

//non primitive values like (object,array) are passed by references
const manik={name:'manik',balance:5000}
const roton={name:'rabbi',balance:4000}
console.log('before call ',manik,roton);

function totalMoney(person1,person2){
    person1.balance=100;
  person2.balance=person2.balance/2;
  const total=person1.balance+person2.balance;
  return total;
}
const balance=totalMoney(manik,roton);
console.log('balance',balance)
console.log('after call',manik,roton)
 