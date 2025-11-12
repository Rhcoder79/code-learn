function isLeapYear(year){
   if(year%4===0){
    return true;
   }
   else{
    return false;
   }
}
const check=isLeapYear(2028);
console.log(check);
function clear(year){
    if(year%4===0 && year%100 !==0){
        return 'ordinary leap year';
    }
    else if(year%100===0 && year%400===0){
        return 'special leap year';
    }
    return 'ordinary year';
}
const doubleCheck=clear(100);
console.log(doubleCheck);



