const disha=56;
const salman=95;
if(disha>salman){
    console.log('disha will get the stoberry');
}
else{
    console.log('salman get');
}
//inside a function

function getMax(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}
const inquiry=getMax(87,79);
console.log(inquiry);
const inquiry2=getMax(76,79);
console.log(inquiry2);
const ultimate=getMax(inquiry,inquiry2);
console.log(ultimate);
console.log(getMax(inquiry2,inquiry2));