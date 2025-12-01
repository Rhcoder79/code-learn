//triple equal
// console.log(2===2);
// console.log(1===2);
// console.log(true===1);
// console.log(false===0);
// console.log(null===undefined);
// console.log(0==='');
// console.log([]==='');
console.log(NaN===NaN)// not a number and not a number is not same when checking both triple equal or double equal
console.log('check');
//double equal
//it converts a boolean to number if true value is 1 if false value is 0

//  console.log(true==1);//it returns true because it does not check the type true=1
//  console.log(false==0);//it returns true because it does not check the type false=0
// console.log(true=='1');//it returns true because it does not check the type true=1
// console.log(false=='0');//it returns true because it does not check the type false=0
 //console.log(null==undefined);// both value is empty for the reason of checking only the value it return true
 //console.log(NaN==NaN);// NOT A NUMBER AND NOT A NUMBER IS NOT SAME IN BOTH TYPE OF CHECKING
// console.log(0=='');
 //console.log([]=='');//it checks only value, array is empty and string is empty that is why it is it returns true
 //
 //when we check non primitive with non primitive if the type and value are same it returns false in
 //  both case double or triple equal because that are different reference but when it same reference it returns true
//console.log([]=={})
//console.log({age:2}==={age:2});//it returns false because that are different reference
 //console.log({age:2}=={age:2});//it returns false because that are different reference
 const p=[3,4,5,6];
 const q=p;
 console.log(p==q);//it returns true because that are same reference
 console.log(p===q)//it returns true because that are same reference
