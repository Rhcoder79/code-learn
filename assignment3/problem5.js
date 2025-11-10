/** Problem 06 : (Current Salary ) */
var experience = 30;
var startingSalary = 45000;
//write your code here
    var increase=(startingSalary/100)*105;
var payment=0;
for(var n=1;n<=experience;n++){
   payment=startingSalary+increase;
}
console.log(payment);







