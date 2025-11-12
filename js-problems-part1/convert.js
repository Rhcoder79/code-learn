// 12inch 1 feet    
function into(inch){
    const feet=inch/12;
    return feet;
}
const myHeight=into(62);
console.log(myHeight);
//
function inchToFeet(inch){
   const feet=inch/12;
   const feetNumber=parseInt(feet);
   const remaining= inch % 12;
   const result=feetNumber+' feet '+remaining+' inch';
   return result;
   }
   const shoveHeight=inchToFeet(11);
   console.log(shoveHeight);