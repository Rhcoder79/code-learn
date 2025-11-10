const numbers=[6,8,2,8,4,3];
//numbers.sort();
//console.log(numbers);

const friends=['robiul','hasan','jual','rana','sohel','tamim','barek','mubarak','loren'];
//friends.sort();
//console.log(friends);
const ages=[1,5,100,15,28,3,7,8,9,13,53,132,101,21,19,24,2,21];
ages.sort();
console.log(ages);
//ascending mane small to big
const sorted_ages=ages.sort(function(a,b){return a-b});
console.log(sorted_ages);
 
//descending mane big to small
const des_ages=ages.sort(function (a,b){return b-a});
console.log(des_ages);