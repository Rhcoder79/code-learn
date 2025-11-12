/**
 Task-3
Write a function called make_avg() which will take an array of integers and the size of that array
 and return the average of those values.


 */
function make_avg(numbers,size){
    let sum=0;
    for(let i=0;i<size;i++){
        sum+=numbers[i];
    }
    if(size===0){
        return 0;
    }
    const average=sum/size;
    return average;

}
const numArray=[15,17,16,62,10];
const arraySize=numArray.length;
const store=make_avg(numArray,arraySize);
console.log(store);
/**
 Task-4
Write a function called count_zero() which will take a binary string (Binary string is a
 string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


 */
/*function count_zero(word){
    let count=0
       for(const wo of word){
        if(wo==='0'){
            count++;
        }
       }
       return count;
}
const type=count_zero('111010101010');
console.log(type);*/
function count_zero(word){
    let count=0;
    for(let o=0;o<word.length;o++){
        if(word[o]==='0'){
            count++;

        }

    }
    return count;
}
const type=count_zero('01101001010');
console.log(type);
/*
Task-5
Write a function called odd_even() which takes an integer value and
 tells whether this value is even or odd. If even return Even. If odd return Odd
*/
function odd_even(check){
    if(!Number.isInteger(check)){
        return 'input must have to be a integer';
    }
    if(check%2===0){
        return 'even';
    }else {
        return 'odd';
    }
    
}
const verify=odd_even(-11);
console.log(verify);
const len=odd_even(56.11);
console.log(len);
const ver=odd_even(43);
console.log(ver);
const clarify=odd_even(44);
console.log(clarify);