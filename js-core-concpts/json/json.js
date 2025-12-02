
  const loadData=()=>{
fetch('https://jsonplaceholder.typicode.com/todos/1')
//promise to response
  .then((res) =>res.json())
  //promise of response
  .then(data=>console.log(data));    

  };
  
//   const loadPost=()=>{
//     const url="https://jsonplaceholder.typicode.com/posts";
//     fetch(url)
//     .then((rh)=>rh.json())
//     .then((json)=>{
//         console.log(json);
//         displayPost(json);
//     });
//   }
//   const displayPost=(posts)=>{
//  posts.forEach((post)=>{
//     console.log(post);
//  });
//   };


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