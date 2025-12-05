const createElement=(arr)=>{
   const element=arr.map(el=> `<span class='btn'>${el}</span>`);
   console.log(element.join(" "));
};
const synonym=['hello','hi','excuse']
createElement(synonym);