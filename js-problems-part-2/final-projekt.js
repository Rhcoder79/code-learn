//problem 1
function totalFine( fare ) {
 if(typeof fare!=='number' ||fare<=0){
    return 'Invalid';
 }
  const fine=fare+fare/100*20+30;

 return fine;
}
//problem 2
function onlyCharacter(str){
    if(typeof str==='string'){
        const slice=str.split(' ');
        const character=slice.join('').toUpperCase();
      return character;
    }else{
        return 'Invalid';
    }
}
//problem 3
function bestTeam(player1, player2){
    if(typeof player1=='object'&& typeof player2=='object'){
   const player1Total=player1.foul+player1.cardY+player1.cardR;
const player2Total=player2.foul+player2.cardY+player2.cardR;
      if(player1Total>player2Total){
        return player2.name;
      }else if(player2Total>player1Total){
        return player1.name;

    }else if(player1Total===player2Total){
        return 'Tie';
      }
}else{
    return "Invalid";
}

}

//problem 4
function isSame(arr1 , arr2 ) {

    if(Array.isArray(arr1)===false ||Array.isArray(arr2)===false){
        return "Invalid";
    }
    else if(arr1.length===arr2.length ){
      for(let ar =0; ar<arr1.length;ar++){
        if(arr1[ar]!==arr2[ar]){
            return false;
        }
    
      }
       return true; 
    }else{
        return false;
    }
}
//problem 5
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


