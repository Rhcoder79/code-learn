const products=[
    {name:'shampoo',price:3,quantity:30},
 {name:'chiruni',price:20,  quantity:20 },
{name:'shirt',price:500, quantity:15  },
{name:'pant',price:400,quantity:10  }
];
function totalPrice(shop){
    let sum=0
for(const pro of products){
    //sum+=pro.price*pro.quantity;//one line
    const thisPrice=pro.price*pro.quantity;
    sum+=thisPrice
}
return sum;
}
const market=totalPrice(products);
console.log(market);