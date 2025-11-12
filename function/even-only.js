/**
 * create function that will return only the even numbers
 * return the sum of even numbers
 */
const point=[5,8,91,24,6]
function sumofEvenNumbers(point){
    let sum=0;
    for(const number of point){
        if(number%2===0){
            console.log(number);
            sum+=number;
        }
    }
    return sum;
}
const sum=sumofEvenNumbers(point);
console.log('sum of the even numbers is', sum );

function evenNumber(numbers){
//console.log(numbers);
const evens=[];
 for(const number of numbers){
 if(number%2===0){
    console.log(number);
    evens.push(number);
 }
 }
     return evens;

}
const numbers=[5,8,91,24,6];
const array= evenNumber(numbers);
console.log('even numbers are',array);

