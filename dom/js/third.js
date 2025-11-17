console.log('third');
//get the parent
const third=document.getElementById('third-list');
console.log(third);
//create the child
const lis=document.createElement('li');
lis.innerText='brand new list item';
third.appendChild(lis);
