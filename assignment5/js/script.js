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
      title:'National Emergency Number',
     callNumber:999,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
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
      title:'Police Helpline Number',
     callNumber:999,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
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
      title:'Fire Service Number',
     callNumber:999,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
    
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
      title:'Ambulance Service',
     callNumber:1994-999999,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
    
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
      title:'Women & Child Helpline',
     callNumber:109,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
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
      title:'Anti-Corruption Helpline',
     callNumber:106,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
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
      title:'Electricity Helpline',
     callNumber:16216,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
    
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
      title:'Brac Helpline',
     callNumber:16445,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
    
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
      title:'Bangladesh Railway Helpline',
     callNumber:163,
       date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
})
// call history
