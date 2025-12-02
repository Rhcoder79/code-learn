// function counter(){
//     let count=0;
//     function innerFunction(){
//    console.log('inside ')
//     }
//     return innerFunction;

// }
// const output=counter();
// console.log(output());
 
function counter(){
    let count=10;
    return function(){
        count+=1;
        console.log('inside the',count);
    }
}
 const innerFunction=counter();
// console.log(innerFunction());
 innerFunction()
 innerFunction()
// innerFunction()
// innerFunction()
// innerFunction()
// innerFunction()
// innerFunction()
// innerFunction()
// innerFunction()
// innerFunction()
const rahimCounter=counter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
