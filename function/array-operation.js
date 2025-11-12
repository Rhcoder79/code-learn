/**
 * objective: write a function to give me the sum of all numbers in an array
 * step-1:declare a function
 * step2: call check whether the function is called property
 * step-3:set a parameter(s)
 * step-4:pass the parameter(s),check whether parameter is  passed in a proper format
 * step-5: do the functions tasks (step by step)
 */
function sum(num){
 //console.log(num);
 let amount=0;
  for(const number of num){
   console.log(number);
   amount+=number;
  }
     return amount;

}
const numbs=[54,67,88,72,90];
const total=sum(numbs);
console.log('sum of numbers is',total);