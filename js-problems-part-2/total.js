const products=[
    {name:'shampoo',price:3},
 {name:'chiruni',price:20},
{name:'shirt',price:500},
{name:'pant',price:400},
];
function totalPrice(shop){
    let sum=0
for(const pro of products){
    sum+=pro.price;
}
return sum;
}
const market=totalPrice(products);
console.log(market);