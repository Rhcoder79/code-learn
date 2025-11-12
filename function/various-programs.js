function location(place){
    const size=place.length;
        console.log(place,size);

    if(size%2===0){
        console.log('even size');
    }else{
        console.log('odd size');
    }
}
location('dhaka');
location('faka');
function doubleOrtriple(number,doDouble){
    if(doDouble===true){
        const result=number*2;
        return result;
    }else{
        const result=number*3;
        return result;
    }
}
//console.log(doubleOrtriple(5,true));
//console.log(doubleOrtriple(5,false));

function numberofElements(numbers){
    const len=numbers.length;
            console.log(len);

    return len;

}
const store=numberofElements([21,45,33,77,79,8,18,72,10,57,87]);
console.log(store);

function getAge(person){
    const age=person.age;
    return age;
}