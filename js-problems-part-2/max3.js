const jim=-10;
const tim=-9.5;
const kim=-9.5;
if(jim>tim &&jim>kim){
    console.log('jim wins');
}else if(tim>jim && tim>kim){
    console.log('tim wins');
}else{
    console.log('kim wins');
}
function maxofThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }else if(num2>num1 && num2>num3){
        return num2;
    }
        return num3;
    

}
const judge=maxofThree(jim,tim,kim);
console.log(judge);

const max=Math.max(77,66,88,92,90,91);
console.log(max);