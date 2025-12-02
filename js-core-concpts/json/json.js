fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) =>
(res.json())
).then(data=>console.log(data));    

  
// console.log('js file connected')
// console.log('EXPLORE API');

// const person={
//     name:'selim',
//     fruit:'dali',
//     dish:'halim',
//     friends:['alim','kolim','nalim'],
//     isRich:false,
//     money:34000
// };
// console.log(person,typeof person);
// //JSON --> JS object with notation
// //json.stringify -->convert json string
// //json.parse -->convert json format of data to object
// const personJSON=JSON.stringify(person);
// console.log(personJSON,typeof personJSON);
// const parseJson=JSON.parse(personJSON);
// console.log(parseJson);