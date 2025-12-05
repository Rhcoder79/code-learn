console.log('i am can')
const createElement=(arr)=>{
   const element=arr.map(el=> `<span class='btn'>${el}</span>`);
   return element.join(" ");
};
const manageSpinner=(status)=>{
    if(status==true){
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('word-container').classList.add('hidden');
  
    }else{
         document.getElementById('word-container').classList.remove('hidden');
        document.getElementById('spinner').classList.add('hidden');
    }
}
const loadLesson=()=>{
    const url='https://openapi.programming-hero.com/api/levels/all';
    fetch(url) //promise to response
    .then(response=>response.json()) //promise to give me the json data
    .then(responseResult=>displayLesson(responseResult.data));
}
const removeActive=()=>{
    const lessonBtns=document.querySelectorAll(".lesson-btn")
   lessonBtns.forEach((btn)=>btn.classList.remove('active'));

}
const loadLevelWord=(id)=>{
    manageSpinner(true);
    const url=`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(response=>response.json())
    .then(responseResult=>{
        removeActive();
        const clickBtn=document.getElementById(`lesson-btn-${id}`);
        clickBtn.classList.add("active");
        displayLevelWord(responseResult.data)
    });

}
const loadWordDetail=async(info)=>{
  const url=`https://openapi.programming-hero.com/api/word/${info}`;
  //console.log(url);
  const res=await fetch(url);
   const details=await res.json();
  displayWordDetails(details.data);
}

const displayWordDetails=(wo)=>{
console.log(wo);
const detailContainer=document.getElementById('detail-container');
detailContainer.innerHTML=`
<div class="">
     <h2 class="text-2xl font-bold">${wo.word} (<i class="fa-solid fa-microphone-lines"></i> :${wo.pronunciation})</h2>
    </div>
    <div class="">
     <h2 class=" font-bold">meaning</h2>
     <p>${wo.meaning}</p>
    </div>
    <div class="">
     <h2 class=" font-bold">Example</h2>
     <p>${wo.sentence}</p>
    </div>
    <div class="">
     <h2 class="font-bold">synonym</h2>
    <div class="">${createElement(wo.synonyms)}</div>
    </div>
`;
document.getElementById('word_modal').showModal();


}
const displayLevelWord=(words)=>{
    const wordContainer=document.getElementById('word-container');
    wordContainer.innerHTML='';
    // for(const wor of words){
    //  const wordDiv=document.createElement('div')
    // }
    if(words.length==0){
        wordContainer.innerHTML=`
        <div class="text-center col-span-full rounded-xl py-10 space-y-6">
        <img class="mx-auto" src="./assets/alert-error.png" />
    <p class="text-xl  font-medium text-gray-600">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h2 class="font-bold  text-4xl">নেক্সট Lesson এ যান</h2>
   </div>
        `;
        manageSpinner(false);
                return;
    }
    words.forEach(wor=>{
             const wordDiv=document.createElement('div')
             wordDiv.innerHTML=`
              <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="font-bold text-2xl">${wor.word ?wor.word:"শব্দ পাওয়া যায়নি"}</h2>
        <p class="font-semibold ">Meaning /Pronoun</p>
        <div class="text-2xl font-bangla font-medium">"${wor.meaning?wor.meaning:'অর্থ পাওয়া যায়নি'} / ${wor.pronunciation?wor.pronunciation:'উচ্চারণ পাওয়া যায়নি'}"</div>
        <div class="flex justify-between items-center">
            <button onclick="loadWordDetail(${wor.id})" class="btn bg-[#1A91FF50] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
            <button class="btn bg-[#1A91FF50] hover:bg-[#1A91FF80] "><i class="fa-solid fa-volume-high"></i></button>

        </div>
    </div>
             `
             
             wordContainer.append(wordDiv);
    });
    manageSpinner(false);
}
const displayLesson=(lesson)=>{
//get container and empty the container
const levelContainer=document.getElementById('level-container');
levelContainer.innerHTML='';

for(const les of lesson){
    
    //create element
 const btnDiv=document.createElement('div');
 btnDiv.innerHTML=`
         <button id="lesson-btn-${les.level_no}" onclick='loadLevelWord(${les.level_no})' class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i>lesson - ${les.level_no}</button >

 `;
 //append into container
 levelContainer.append(btnDiv);

}
}


loadLesson();
document.getElementById('btn-search').addEventListener('click',()=>{
    const inputValue=document.getElementById('input-search');
    const searchValue=inputValue.value.trim().toLowerCase();
    console.log(searchValue);
    fetch("https://openapi.programming-hero.com/api/words/all")
    .then(response=>response.json())
    .then(jsonResult=>{
     const allWords=jsonResult.data;
     console.log(allWords);
     const filterWords=allWords.filter(w=>w.word.toLowerCase().includes(searchValue));
    displayLevelWord(filterWords);
    }
    );
})