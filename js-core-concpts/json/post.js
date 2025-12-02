const loadPost=()=>{
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
       // console.log(data);
       displayPost(data);
    });
};
// {
//     "userId": 10,
//     "id": 96,
//     "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
//     "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
// }
const displayPost=(posts)=>{
    //1. get the container and empty the container
    const postContainer=document.getElementById("post-container");
  postContainer.innerHTML='';
    posts.forEach((post)=>{
        //2. create element
        const postCard=document.createElement('div');
        postCard.innerHTML=` <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`;
        //3. add to the container 
        postContainer.append(postCard);
    });
}
loadPost();
// const displayPost= (posts)=>{
// //1. get the container
// const postContainer=document.getElementById('post-container');
// console.log(postContainer);
// postContainer.innerHTML="";
// //    for(let i=0;i<posts.length;i++){
// //     console.log(posts[i]);
// //    }
// // for(let post of posts){
// //     console.log(post);
// // }
// posts.forEach(post=>{
//    // console.log(post.title);
//     //2. create html element 
//     const li=document.createElement("li");
//     li.innerText=post.title;
//   //  console.log(li);
//     //3. add li into container
//     postContainer.appendChild(li);
// })
// }
