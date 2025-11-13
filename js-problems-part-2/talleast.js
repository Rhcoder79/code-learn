const heights=[61,66,68,72,78,60,57,67];
 function knowMax(numbers){
                    let difi=numbers[0];

    for(const num of numbers){
        if(num>difi){
            difi=num;
        }

    }
 return difi;
 }
 const max=knowMax(heights);
 console.log(max);
 function knowmin(numbers){
    let min=numbers[0];
    for(const num of numbers){
    if(num<min){
        min=num;
    }
    }
    return min;
 }
 const min=knowmin(heights);
 console.log(min);