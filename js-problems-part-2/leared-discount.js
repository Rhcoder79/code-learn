/**
 * first100 =100;
 * secend100=90;
 * above=70;
 
 */
function layerDiscount(quantity){
    const first100=100;
    const secend100=90;
    const above=70;
    if(quantity<=100){
      const  price=quantity*first100;
        return price;
    }else if(quantity<=200){
       const firstPrice=100*first100;
        const remain=quantity-100;
        const remainPrice=remain*secend100;
        const price=firstPrice+remainPrice;
        return price;
    }else{
        const firstPrice=100*first100;
        const secendPrice=100*secend100;
        const remain=quantity-200;
        const remainPrice=remain*above;
        const price=firstPrice+secendPrice+remainPrice;
        return  price;
    }
}
const t_shirt=layerDiscount(210);
console.log(t_shirt);