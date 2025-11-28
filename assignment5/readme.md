

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: With the help of getElementById we can call only an id which is unique,with the help of getElementsByClassName
 we can call multiple classes with which have same class name, with the help of querySelector we can find the first element of my searching keyword if it did not fine any element that matched my keyword than it returns null, with the help of querySelectorAll we can find the element that matched my searching keyword it returns a nodeList if it did not fine any element that matched my keyword than it returns nodeList([])
2. How do you **create and insert a new element into the DOM**?
Answer: first we have create an element like
 const element= document.createElement('div');
 than we have set content in the element which is optional like,
 element.textContent='i want to be a developer'
 than we can add attributes which is also optional 
 than we can also allowed to give css styles
 than last we have to do appendChild in his parent element like
 const parentContainer=document.getElementById('parent-con')
  parentContainer.appendChild(element)
3. What is **Event Bubbling** and how does it work?
Answer: Event Bubbling is an event which is happened after clicking the event setter function like
 document.getElementById('con-trainer')
 .addEventListener('click',function(){
  console.log('hello event bubble i am clicked')
 })
4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: with Event Delegation we can take the parent element and we receive our require child element it can catch than we finish the work of the child element it reduce code we did not extra eventListener in child element it can handle by parent element by adding addEventListener
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer: preventDefault()  stops the default behavior of the browser,stopPropagation() stops increasing the parent element but it did not stop the browser default behavior.

