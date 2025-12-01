//variable
const tax=5000;
let eta=4;
eta=2;

//default parameter
function add(num1,num2=0){

}
const student={name:'nayeem',marks:58}
const friends=['abul','kabul','babul']
//template string
const dynamicText=`My tax: ${tax}  and marks ${student.marks*1.2} has friend: ${friends[2]} `

const innerHTML=`
<div>
<h1>hello: ${friends.length}</h1>
<p></>
</div> `

//arrow function
const add2=(num1,num2) =>num1+num2;
const tenTimes=x =>x*10;

//spread 
const newFriends=[...friends,'dabul','ebul']
//destructuring
// const {marks}=student
// console.log(marks);
const {marks:totalMarks,age=21}=student
//  console.log(totalMarks,age);
const [fir,sec]=friends;
console.log(fir,sec)
