function evenNumber(marks){
    let sum=0;
    let size=0;
  for(const mark of marks){
    //console.log(mark);
     if(mark%2===0){
        sum+=mark;
         size++;
     }
  }
     if(size>0){       
      const ave=sum/size;
  return ave;
     }
 else{
    return 'not declare';
}
}
const examResult=evenNumber([19,24,46,53,60,50]);
console.log(examResult);