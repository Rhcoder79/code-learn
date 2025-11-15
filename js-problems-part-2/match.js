const numbers=[45,65,23,98,19];
//for(let i=0;i<numbers.length;i++){
  //  const number=numbers[i]
 //   console.log(number);
//} 
/*for(const number of numbers){
    console.log(number);
}*/
const items=[
    {id:1,name:'iphone laptop',price:120000},
    {id:2,name:'tecno laptop',price:12000},
    {id:3,name:'walton phone',price:14000},
    {id:4,name:'mac laptop',price:200000},
    {id:5,name:'xiomi phone',price:25000},
    {id:6,name:'one plus phone',price:290000},
    {id:7,name:'itel phone',price:17000},
    {id:8,name:'tell ',price:1200},
    {id:9,name:'vivo phone',price:14000},
    {id:10,name:'oppp Phone',price:18000},

]
//for(const item of items){
//    console.log(item);
//}

function matchedItem(items,search){
    const matched=[];
    for(const item of items){
        if(item.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(item);
        }
    }
    return matched;
}
const result=matchedItem(items,'LapTOP');
console.log(result);