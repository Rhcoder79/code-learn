/**
 Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.
 */
function convert(Celsius) {
    const Fahrenheit=Celsius*1.8+32;
    return Fahrenheit;
}
const temperature=convert(-1.2);
console.log(temperature);
/*
Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
*/
const numbers1 = [5,6,11,12,98, 5];
 const find1=5;
 const numbers2=  ([5,6,11,12,98, 5]);
 const find2=25;
 const output=check(numbers1,find1);
const output2=check(numbers2,find2);
 console.log(output,output2);
function check(numbers,findNumbers){
   let  count=0;
    for(const num of numbers){
        if(num===findNumbers ){
            count++
        }
    } 
    return count;
}

/**
 Task-3:
Write a function to count the number of vowels in a string.
 */
function art(text){
    let count=0;
    const lower=text.toLowerCase();
    for(const vow of lower){
        if(vow==='a'||vow==='e'||vow==='i'||vow==='o'||vow==='u'){
            count++
        }
    }
    return count;
  
}
let content=art('i am a devoloper i E I love to coding coding is fun for my');
console.log(content);

/**
 Task-4:
Write a function to find the longest word in a given string.

sample-input: 
I am learning Programming to become a programmer

sample-output: Programming
 */
function longWord(word){
    const slice=word.split(' ');
    let bigWord=slice[0];
    for(const sli of slice){
          if(sli.length>bigWord.length){
            bigWord=sli;
          }
      }
 return bigWord;
}
const given=longWord('I am learning Programming to become a programmer');
console.log(given);
/**
 Task-5:
Generate a random number between 10 to 20.
 */
function getRandomNumber(min,max){
   return Math.round(Math.random()*(max-min)+min);
}
const maxRange=20;
const minRange=10;
const choose=getRandomNumber(minRange,maxRange);
console.log(choose);
const random=Math.round(Math.random()*(20-10+1)+10);
console.log(random);