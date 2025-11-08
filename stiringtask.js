//Task-1:
//Count how many times a string has the letter a
const letter='My name is ROBIUL HASAN,I am learning web development,har,par It is my career choice';
//console.log(letter.includes('a'));
const trans=letter.split('a').length-1;
console.log(trans);
//task 2
//Count how many times a string has the letter a or A
const art='hello how are you? I AM GOAAOD AND WELL a a  a a what about yAou?what is your a hobby';
const sum=art.toLowerCase().split('a').length-1;
console.log(sum);
//TASK 3
//Check whether a string contains all the vowels a, e, i, o, u
const text='hai kffppo kkkffi AAA a o u e j kal l o';
const vowel=['a','e','i','o','u'];
const lower=text.toLowerCase();
//const present=vowel.every(char=>lower.includes(char));
const a='a';
const e='e';
const i='i';
const o='o';
const u='u';
const z='z';

if(lower.includes(a)&&lower.includes(e)&&lower.includes(i)&&lower.includes(o)&&lower.includes(u)){
    console.log('vowel')


}else{
    console.log('not have a vowel');
}


