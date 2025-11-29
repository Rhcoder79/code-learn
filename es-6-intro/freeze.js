const employee={
    name:'raja ',
    designation:'QA',
    salary:20000,
    experience:2,
    age:22
}
//freeze can not give you to delete , add, modify
employee.salary=employee.salary+5000;
Object.freeze(employee);
 delete employee.salary;
employee.location='Dhaka'
console.log(employee)