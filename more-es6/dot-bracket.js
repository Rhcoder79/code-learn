const student={
    name:'rh',
    1:40,
    marks:80
}
//dot notation
const studentName=student.name;
console.log(studentName)
//bracket notation
const studentOne=student[1];
console.log(studentOne)
console.log(student)
for(const key in student){
    const value=student[key]
   // console.log(value)
}
const propName='marks'
console.log(student[propName])
  //OPTIONAL CHAIN
const students={
    name:'rh',
    1:60,
    family:{
   title:'bhuyiah',
//    mother:{
//     name:"shirotaj begum",
//     age:50
//    }
    }
}
//console.log(students[1])
console.log(students.family.mother?.age)