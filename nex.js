//task 4
//If a given string has either x, replace x by y. if the given string has X, replace it by Y.
//Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.


const web=' my name is slaves of allah may allah bless me so you are a xia ix fix SIX TIX ';
const hasx=web.includes('x');
const  hasX=web.includes('X');
console.log(hasx,hasX);
//const tran=web.replace('X','Y');
//console.log(tran); // it work for first letter of X not all the letter of X

//const allx=web.replace(/x/g,'y');
//const allX=web.replace(/X/g,'Y');
//console.log(allx);
//console.log(allX);
let rep=web.replace(/x/g,'y');
rep=rep.replace(/X/g,'Y');
console.log(rep);
//TASK 5 
//Capitalize Every first Letter of each word in a String
const str='i am a developer i love coding it is my second passion i  feel so passionate about it. it feels me happy ';
const lower=str.toLowerCase().replace(/\b\w/g,char=>char.toUpperCase());
console.log(lower);
