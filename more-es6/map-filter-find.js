const  students=[
    {id:1,name:'rakib',marks:69},
     {id:1,name:'sakib',marks:79},
      {id:1,name:'aakib',marks:59},
      {id:1,name:'nakib',marks:89},
       {id:1,name:'sojib',marks:76},
        {id:1,name:'rakes',marks:98}, 
]
const names=students.map(stuName=>stuName.name);
const marks=students.map(x=>x.marks*1.2);
console.log(marks)
console.log(names)
const goodStudents=students.filter(x=>x.marks>80);
console.log(goodStudents);
const best=students.find(x=>x.marks>80);
console.log(best);
