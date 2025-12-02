function pakhiBhai(callMeBack,patro,patri){
    //console.log('value of patro',patro)
    //console.log('call me back parameter',cllMeBack)
    if(patri){
       // console.log(cllMeBack)
  callMeBack(patro)
    }
    else{
        console.log('tor kopale parti nai');
    }

}
function callSomeOne(person){
    console.log('calling',person)
}
//callSomeOne('jadu')
pakhiBhai(callSomeOne,'jodu','urfi')