const numbers=[22,24,55,66,177,79]
console.log(numbers);
console.log(...numbers);
const max=Math.max(22,55,79,89,65,43,56,78,9,12);
console.log(Math.max(...numbers))
console.log(max)

// const first=[2,4,6,8,10];
// const second=first;
// second.push(12);
// console.log(first);
const first=[2,4,6,8,10];
const second=[...first];
second.push(12);
const third=[0,...first,14,16,18]
console.log(first);
console.log(second)
console.log(third)
//
const ages=[21,24,25,]
const price=[130,140,150]
const all=[...ages,22,23,...price]
console.log(all);

const person={
    name:'mizan',
    age:22
}
const employee={
    ...person,
    designation:'assistant operator',
    
}
console.log(employee)

const total=(a,b,c)=>a+b+c;
const result=total(35,56,44);
console.log(result);
const digits=[12,33,12];
const mot= total(...digits);
console.log(mot)
