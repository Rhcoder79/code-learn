/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

console.log(area/2);

/** Problem -02 ( Cycle or Laptop ) */
var money =10000;
//write your code here
if(money>=25000){
    console.log('Laptop');
}else if(money>=10000){
    console.log('Cycle');
}else{
    console.log('Chocolate');
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for(i=1;i<=lastDay && lastDay<=30;i++){
    if(i%3===0){

        console.log(i, '-', 'medicine');
    }
    else{
        console.log(i, '-', 'rest');
    }
}

/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
 var splice=fileName.slice(0,1);
 var pdf=fileName.slice(-4);
 var docs=fileName.slice(-5);
 if(splice.includes('#') || pdf.includes('.pdf') || docs.includes('.docx')){
    console.log('Store')
 }else{
    console.log('Delete');
 }

/** Problem 05 - ( PH Email Generator ) */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
//var email=student.name+student.roll+student.department+'.'+'@ph.ac.bd';
//console.log(email);
//var concat=student.name.concat(student.roll).concat(student.department).concat('.').concat('@ph.ac.bd');
//console.log(concat);
var short=student.name.concat(student.roll,student.department,'.','@ph.ac.bd');
console.log(short);

/** Problem 06 : (Current Salary ) */
var experience = 30;
var startingSalary = 45000;
//write your code here
let c=1;
while(c<=experience){
var inc=(startingSalary/100)*5;
    startingSalary+=inc;
    c++;
    
}console.log(startingSalary.toFixed(2));




  