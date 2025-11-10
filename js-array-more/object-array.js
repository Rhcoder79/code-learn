const players=[{},{},{}];
const employees=[
    {name:'Ashik',designation:'content writer',salary:25000},
    {name:'atik',designation:'developer',salary:29000},
    {name:'abdul rahim',designation:'digital marketer',salary:21000},
    {name:'asifa',designation:'web dev',salary:29000}
]
//console.log(employees[1].salary);
//console.log(employees[3].designation);
/*for(const employee of employees){
    console.log(employee.salary,employee.designation);
}*/
employees[0].name='Ashraf';
for(const emp of employees){
    const person=emp;
    const personInfo=person.name+' '+'='+person.salary;
   // console.log(person);
    console.log(personInfo);
}
