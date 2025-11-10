const numbers=[17,93,47,74,79,56];
const runs=[27,37,87,45,87,76,7,15,19];
const tournament_run=[[],[],[],[]];
const marks=[
    [56,77,82,64,49],
    [39,52,61,69,71],
    [54,70,60,79,81],
    [72,81,89,91,92]
]
//console.log(marks[3]);
//console.log(marks[3][0]);
var robiul=marks[2];
//console.log(robiul);
var bangla=robiul[0];
//console.log(bangla);
marks[1][0]=51;
marks[2].shift();
marks[0].pop();
marks[0].push(51);
//console.log(marks);
for(const mark of marks){
    console.log(mark);
}