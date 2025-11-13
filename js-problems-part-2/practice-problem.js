/*ask -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

*/
const heights2 = [167, 190, 120, 165, 137];
 
function lower(number){
    let min=number[0];
    for(const num of number){
        if(num<min){
            min=num;
        }
    }
    return min;
}
const result=lower(heights2);
console.log(result);
/**
 Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */
const names2 = ['rahim', 'robin', 'fi', 'rn', 'rashed'];

function search(naming){
     let finding=naming[0];
    for(const na of naming){
        if(na.length<finding.length){
            finding=na;
        }
    }
    return finding;
}
const find=search(names2);
console.log(find);

/**
 Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes
 in the number of laptop, tablets, and mobile and returns the total money required.
 */
function calculateElectronicsBudget(num1,num2,num3){
    const laptop=35000*num1;
    const tablet=15000*num2;
    const mobile=20000*num3;
    const total=laptop+tablet+mobile;
    return total;
}
const required=calculateElectronicsBudget(2,1,1);
console.log(required);
/**
Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price.
 Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input
  and returns the average price of phone.

Input
*/


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
 
function findAveragePhonePrice(input){
     let sum=0;

    for(const pho of input){
      sum+=pho.price
    }
            const   avarage=sum/input.length;

    return avarage;
}
 
const data=findAveragePhonePrice(phones);
console.log(data);

/*
Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then 
adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month. */

 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];


function salary(employee){
        let totalSalary=0
     for(const amount of employee){
                    const fullSalary=amount.starting+amount.experience*amount.increment;
      totalSalary+=fullSalary;
     }
     return totalSalary  ;
}
const totalSalary=salary(employees);
console.log(totalSalary);
console.log(typeof 'null')