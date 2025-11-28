console.log('js file connected')
const transactionData=[]
//heart icon click complete
document.getElementById("heart1")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
document.getElementById("heart2")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
document.getElementById("heart3")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
document.getElementById("heart4")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
document.getElementById("heart5")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
document.getElementById("heart6")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
document.getElementById("heart7")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
document.getElementById("heart8")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
document.getElementById("heart9")
.addEventListener('click',function(e){
    e.preventDefault()
    const heartNum=document.getElementById("increase")
     const grow=heartNum.innerText
    const convert=parseInt(grow)
    const totalHeart=convert+1;
   heartNum.innerText=totalHeart;
   
})
//copy function started
document.getElementById("copy1")
.addEventListener('click',async function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count");
     const grow=copyNum.innerText;
    const convert=parseInt(grow);
     const call=document.getElementById("call-num1").innerText;
     try{
     await  navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
})
document.getElementById("copy2")
.addEventListener('click',function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count")
     const grow=copyNum.innerText
    const convert=parseInt(grow)
     const call=document.getElementById("call-num2").innerText;
     try{
      navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
   
})
document.getElementById("copy3")
.addEventListener('click',function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count")
     const grow=copyNum.innerText
    const convert=parseInt(grow)
     const call=document.getElementById("call-num3").innerText;
     try{
      navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
   
})
document.getElementById("copy4")
.addEventListener('click',function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count")
     const grow=copyNum.innerText
    const convert=parseInt(grow)
     const call=document.getElementById("call-num4").innerText;
    try{
      navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
   
})
document.getElementById("copy5")
.addEventListener('click',function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count")
     const grow=copyNum.innerText
    const convert=parseInt(grow)
     const call=document.getElementById("call-num5").innerText;
     try{
      navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
   
})
document.getElementById("copy6")
.addEventListener('click',function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count")
     const grow=copyNum.innerText
    const convert=parseInt(grow)
     const call=document.getElementById("call-num6").innerText;
    try{
      navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
   
})
document.getElementById("copy7")
.addEventListener('click',function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count")
     const grow=copyNum.innerText
    const convert=parseInt(grow)
     const call=document.getElementById("call-num7").innerText;
     try{
      navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
   
})
document.getElementById("copy8")
.addEventListener('click',function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count")
     const grow=copyNum.innerText
    const convert=parseInt(grow)
     const call=document.getElementById("call-num8").innerText;
    try{
      navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
   
})
document.getElementById("copy9")
.addEventListener('click',function(e){
    e.preventDefault()
    const copyNum=document.getElementById("copy-count")
     const grow=copyNum.innerText
    const convert=parseInt(grow)
     const call=document.getElementById("call-num9").innerText;
     try{
      navigator.clipboard.writeText(call);
          alert('number is copied'+' '+call);
      const totalCopy=convert+1;
        copyNum.innerText=totalCopy;
     }
   catch(err){
    console.error('copied failed',err )
    alert('failed to copy')
   }
   
})

//call button function started
document.getElementById('call1')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name1").innerText
  const call=document.getElementById("call-num1").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;
  
  const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
   const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    

  // const addText=Object.values(data);
  // history.innerText=addText;
})
document.getElementById('call2')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name2").innerText
  const call=document.getElementById("call-num2").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;
    
  const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
   const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    

})
document.getElementById('call3')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name3").innerText
  const call=document.getElementById("call-num3").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;

  const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
    const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    

})

document.getElementById('call4')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name4").innerText
  const call=document.getElementById("call-num4").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;
  const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
   const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    

    
}) 
document.getElementById('call5')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name5").innerText
  const call=document.getElementById("call-num5").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;
    const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
     const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    


})
document.getElementById('call6')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name6").innerText
  const call=document.getElementById("call-num6").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;
    
   const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
     const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    


})
document.getElementById('call7')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name7").innerText
  const call=document.getElementById("call-num7").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;
   const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
     const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    


    
})
document.getElementById('call8')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name8").innerText
  const call=document.getElementById("call-num8").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;
   const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
     const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    


    
})
document.getElementById('call9')
.addEventListener('click',function(e){
    e.preventDefault()

  const coin=document.getElementById('coin-num')
  const coinContent=coin.innerText
  const convert=parseInt(coinContent)
  const service=document.getElementById("service-name9").innerText
  const call=document.getElementById("call-num9").innerText
    if(convert<20){
    alert('you do not have sufficient coin you need at least 20 coin to call ')
    return
  }
  alert(service+' '+call+'...')
 
  const totalCoin=convert-20
  coin.innerText=totalCoin;
    const data={
      title:service,
     callNumber:call,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
     const history=document.getElementById('history-btn')
history.innerText='';
for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-[#F4F5F6]  rounded-xl  flex justify-between items-center mt-2">
        <div class="ml-3">
            <h1>${info.title}</h1>
            <p>${info.callNumber}</p>
        </div>
        <div>
       <h1>${info.date}</h1>
   </div>
      </div>`
      history.appendChild(division);
   }    


})

// call history
 document.getElementById("clear-btn" )
 .addEventListener('click',function(){
   document.getElementById('history-btn').remove()

 })
