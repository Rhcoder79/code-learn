console.log('external file');
//option 2 to handle event
    function makeYellow(){
        document.body.style.backgroundColor='yellow';}
    function makeRed(){
        document.body.style.backgroundColor='red';}

//option 3 get element by id and then set onclick
const btnBlue=document.getElementById('btn-make-blue');
 // console.log(btnBlue);
 btnBlue.onclick=function makeBlue(){
      document.body.style.backgroundColor='blue'; 
    }
 //option 3 different way get element by id and then set onclick to a function
     const btnMakePurple=document.getElementById('make-purple');
         //console.log(btnMakePurple);
    btnMakePurple.onclick=makePurple;
    function makePurple(){
        document.body.style.backgroundColor='purple';
    }
