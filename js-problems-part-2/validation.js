function multiply(num1,num2){
    if(typeof num1!=='number' ||typeof num2!=='number'){
        return 'please provide a number';
    }
    const mult=num1*num2;
    return mult;
}
const result=multiply(5,'six');
console.log(result);
function fullName(first,second){
    if(typeof first!=='string'){
        return 'first name should be string'
    }else if(typeof second !=='string'){
        return 'last name should be string'
    }
  const full=first+' '+second;
  return full;
}
const names=fullName();
console.log(names);


function geTPrice(products){
    if(typeof products!=='object'){
        return 'provide object'
    }
    const price=products.price;
    return price;
}
//const amount=geTPrice({name:'nuduls',price:150,color:'blue'});
const know=geTPrice(6);
console.log(know);
//console.log(amount);
function get(numbers){
if(Array.isArray(numbers)===false){
    return 'please provide an array';
}
    const second=numbers[1];
    return second;
}
const type=get([44,65,66]);
console.log(type);