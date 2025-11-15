function woodCalculator(chair,table,bed){
    const perChair=3;
    const perTable=10;
    const perBed=50;
    const allChair=chair*perChair;
    const allTable=table*perTable;
    const allBed=bed*perBed;
    const allWood=allChair+allTable+allBed;
    return allWood;
}
const wood=woodCalculator(8,3,2);
console.log(wood);
function cloths(shirt,pant,shoe){
   const perShirt=500;
   const perPant=300;
   const perShoe=900;
   const allShirt=shirt*perShirt;
   const allPant=pant*perPant;
   const allShoe=shoe*perShoe;
   const totalPrice=allShirt+allPant+allShoe;
   return totalPrice;
}
const market=cloths(3,2,1);
console.log(market);
