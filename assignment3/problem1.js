/** Problem -03 ( Medicine Planner ) */
var lastDay = 9 ;
//write your code here
var num=0;

if(lastDay <=30){
            num+=lastDay;
         
    if(lastDay%3===0){
        console.log(num, '-', 'medicine');
    }
    else{
        console.log(num, '-', ' rest');
    }
}
  for(b=1;b<=30;b++){

    if(b%3===0){
                console.log(b, '-' ,'medicine')

        break
    }
   console.log(b, '-', 'rest');
}    