/**
 Task-1
Take four parameters. Multiply the four numbers and then
  return the result
 */
function four(mul1,mul2,mul3,mul4){
    const amount=mul1*mul2*mul3*mul4;
    return amount;
}
const mulResult=four(5,4,3,7);
console.log(mulResult);
/**
 Task-2
Take a number if the number is odd multiply it by 2 and
 return the result. If the number
 is even divide it by two and return the result.
 */
function test(i){
    let result=i;
 if(i%2===1){

   result=i*2;
 }
 else if(i%2===0){
     result=i/2;
 }
 return result;
}
const res=test(40);
console.log(res);
/**
 Task-3
Write a function called make_avg() which will take an
 array of integers and the size of that array and return
  the average of those values.
 */
function make_avg(numbers){
  const len=numbers.length;
  console.log(len);
  let ave=0;
  for(const num of numbers){
    ave+=num;
    
  }
  if(len===0){
    console.log('array is empty')
    return NaN;
  }
  const aveResult=ave/len;
  return aveResult;
}
const store=make_avg([5,2,5,7,8,9,4,7,3,1,3,6,5]);
console.log(store);  
const kep=make_avg([]);
console.log(kep);