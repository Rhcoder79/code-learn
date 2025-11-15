function resultReport( marks ) {
    if(Array.isArray(marks)===false){
        return "Invalid";
    }
    let sum=0;
    let pass=0;
    let fail=0;
    let avarage=0
    for(const mark of marks){
        sum+=mark;
        if(mark>=40){
          pass++;
        }else {
            fail++;
        }
    }
    const totalSubject=marks.length;
    
    if(totalSubject===0){
       totalAvarage=avarage;
    }else{
        totalAvarage=Math.round(sum/totalSubject);
    }
    const totalPass=pass;
    const totalfail=fail;
    const result={
        finalScore : totalAvarage,
        pass:totalPass,
        fail:totalfail
    }
    return result;
}


//const products=[12,15,19];
const products={
    '0':12,
    '1':15,
    '2':19
}