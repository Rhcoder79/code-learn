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
 const statement = 'I am a hard working person';
const slice=statement.split(' ');
/*console.log(slice);// for reverse system
//const repeat=slice.reverse();
//console.log(repeat);
//const rejoin=repeat.join(' ');
console.log("'"+rejoin+"'");*/

/*let reStatement="";//for loop uses
for(let g=slice.length-1;g>=0;g--){
  const word=slice[g];
  console.log(word);
  reStatement+=word;
if(g!==0){            
    reStatement+=" ";
}

}  console.log("'"+reStatement+"'");*/

let reverseWords=[];
for(const sen of slice){
    //console.log(sen);
    reverseWords.unshift(sen);
}    console.log(reverseWords);
const attach=reverseWords.join(' ');
console.log("'"+attach+"'");
/*Task 5
Copy the given array into another array so that
 changing the copy does not affect the original.
 Change the first element of the copied array to 99.

Input: 
[1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3]*/

const products=[1, 2, 3];
const copy=[];
for(const pro of products){
    copy.push(pro);
}
  copy[0]=99;
console.log(products,'copy:',copy);

/**
 Task 6
Given an array of student objects, 
print each student’s
 name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected output:
John scored 85
Alice scored 90
 */
  const students=[
    { name: "John", marks: 85 },
   { name: "Alice", marks: 90 }
  ];
for(const stu of students){
    //console.log(stu);

    console.log(stu.name,"scored",stu.marks);
}
/**
 Task 7
Given a 2D array, update the value at second row
 first item to 99 and print the updated array.

input:

[
  [1, 2],
  [3, 4],
  [5, 6]
]
Expected Array:

[
  [1, 2],
  [99, 4],
  [5, 6]
]
 */
const array2D=[
  [1, 2],
  [3, 4],
  [5, 6]
]
array2D[1][0]=99;
console.log(array2D);
