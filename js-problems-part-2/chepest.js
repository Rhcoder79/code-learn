//const prices=[20000,16000,18000,100000,80000,12000,16000,30000];
const mobiles=[
    {name:'samsung',price:20000,camera:'48px',color:'dark'},
    {name:'vivo',price:14000,camera:'48px',color:'dark'},
    {name:'lenevo',price:18000,camera:'48px',color:'dark'},
    {name:'readmi',price:22000,camera:'48px',color:'dark'},
    {name:'realmi',price:19000,camera:'48px',color:'dark'},
    {name:'iphone',price:190000,camera:'48px',color:'dark'},
    {name:'itel',price:21000,camera:'48px',color:'dark'}
]
function getCheap(phone){
     let min=phone[0];
    for(const pho of phone){

if(pho.price<min.price){
    min=pho;
    }    
   }
   return min
}
const cheap=getCheap(mobiles);
console.log(cheap);