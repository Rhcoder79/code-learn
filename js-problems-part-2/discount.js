function discountPrice(quantity){
    if(quantity<=100){
        const price=quantity*100;
            return price;

    }else if(quantity<=200){
        const price=quantity*90;
            return price;

    }else{
        const price=quantity*75;
            return price;

    }
    
}
const amount=discountPrice(101.5);
console.log(amount);