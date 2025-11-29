const employee={
    name:'raja ',
    designation:'QA',
    salary:20000,
    experience:2,
    age:22
}
//seal can not give you to delete or add it can give to modify
employee.salary=employee.salary+5000;
Object.seal(employee);
 delete employee.salary;
employee.location='Dhaka'
console.log(employee)