function duplicate(numbers){
    const unique=[];
    for(const num of numbers){
        if(unique.includes(num)===false){
            unique.push(num);
        }

    }
return unique;

}
const verify=duplicate([33,19,31,21,26,74,21,77,19,31,76]);
console.log(verify);