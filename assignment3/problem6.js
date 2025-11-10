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
