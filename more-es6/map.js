const numbers=[2,3,7,5,6,7,8,4,10]
// const double=[]
// for(const num of numbers){
//     const result=num*2;
//     double.push(result);

// }
//
// const doubleIt=(x)=>x*2
// const double=numbers.map(doubleIt)
//shortcut
// 
const friends=['rak','sakib','javed','nobel','forhad','dum']
//console.log(friends.map(num=>num.length));
 //const nameLengths=friends.map(num=>num.length)
//console.log(nameLengths)
//transform 
//const firstLetters=friends.map(num=>num[0].toLocaleUpperCase());
//console.log(firstLetters)

const result=numbers.map((num,index)=>{
  //  console.log(num*index);
  return num*index 
})
console.log(result)