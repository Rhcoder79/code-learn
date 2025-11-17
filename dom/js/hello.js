console.log('hello from outside');
console.log(document);
//parent code 
const mainContainer=document.getElementById('main-con');
console.log(mainContainer);
//create child node
const placesec=document.createElement('section');
//create h1
const head=document.createElement('h1');
head.innerText='places i want to visit';
placesec.appendChild(head);
const anorderlist=document.createElement('ul');
const num1=document.createElement('li');
num1.innerText='bandarbon';
anorderlist.appendChild(num1);
const num2=document.createElement('li');
num2.innerText='sundorbon';
anorderlist.appendChild(num2);
placesec.appendChild(anorderlist);
//append placesSection to the maincontainter

mainContainer.appendChild(placesec);
//easier to create html
const books=document.createElement('section');
books.innerHTML=`
<h1> books i want to read</h1>
<ul>
<li>english</li>
<li>math</li>
<li>biology</li>
<li>higher math</li>

</ul>
`
mainContainer.appendChild(books);