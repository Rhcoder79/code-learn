let price=25;
let com_price=price;
//price=20;
com_price=15;
//console.log(price);
//console.log(com_price);

const products=[25,25,25];
const com_products=products;
com_products[0]=15;
products[1]=55;
//console.log(products);
//console.log(com_products);

const myResult=[75,75,75];
const friendResult=[];
for (const res of myResult){
   // console.log(res);
    friendResult.push(res);
}//console.log(friendResult);

friendResult[0]=70;
myResult[1]=81;
//console.log(myResult);
//console.log(friendResult);

const phone=[0,1,8,8,0,0,1,2,6,6,7];
//const new_NUM= Array.from(phone);
//const new_NUM=[].concat(phone);
const new_NUM=[...phone];
phone.unshift('+',88);
new_NUM.push(79);
console.log(phone);
console.log(new_NUM);

