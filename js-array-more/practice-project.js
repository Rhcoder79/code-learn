//task 1
/*
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: 
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const rever=[];
//for(let i=0;i<colors.length;i++){
//    rever.unshift(colors[i]);
//}console.log(rever);
for(const col of colors){
    rever.unshift(col);
}    console.log(rever);
//task 2
/*
Write a JavaScript code to get the even numbers from an
 array using any looping technique.

Input: 
const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]

*/
const numbers = [12, 98, 5, 41, 23, 78, 46];
let rep=[]
for(const num of numbers){
    if(num%2===0){
        rep.push(num);
       // console.log(num);
    }
}
 console.log(rep);
//task 3
/*
Use a for...of loop to concatenate all the elements
 of an array into a single string.

Input: 
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
Output:
'TomTimTinTik'
*/

var names = ['Tom', 'Tim', 'Tin', 'Tik'];
var add='';
for(const na of names){
  // console.log(na);
 // names=names.concat(na);
 add+=na;
}
var result="'"+add+"'"
console.log(result);
 /*Task 4 (Hard)
Reverse the words of a sentence. 
Only the position of the word will be reversed. 
check out the output

Input:
 const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/
 const statement = 'I am a hard working person'
for(const state of statement){
    console.log(state);
}
