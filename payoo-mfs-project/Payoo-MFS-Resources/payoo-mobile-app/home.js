  
console.log('home js file connected');
const validPin=3690
const cuopon=56664222
const transactionData=[]
//function to get input values converted to num
function getInputNum(id){
 const filedTake=  document.getElementById(id)
 const inValue=filedTake.value
 const inValueConverted=parseInt(inValue)
return inValueConverted
}
//function to get only input values 
function getValue(id){
    const filedTake=  document.getElementById(id)
    const inValue=filedTake.value
    return inValue
}
//function to get innerText
function getInnerText(id){
   const element=document.getElementById(id)
   const elementValue=element.innerText
   const elementValueConverted=parseInt(elementValue)
   return elementValueConverted
}
//function to set innerText
function setInnerText(value){
   const AvailableBalance=document.getElementById('avail-balance')
   AvailableBalance.innerText=value
}
// add money btn
 document.getElementById('Add-money-btn')
 .addEventListener('click',function (e){
   e.preventDefault()
   const selectBank=getValue('bank')
   const accountNumber=getValue('ac-num')
   const addMoney=getInputNum('add-amount')
   const pinAdd=getInputNum('add-pin')
   //console.log(selectBank,accountNumber,addMoney,pinAdd);
    //const AvailableBalance=parseInt(document.getElementById('avail-balance').innerText)
        const AvailableBalance=getInnerText('avail-balance')

    //console.log(AvailableBalance);
    
    if(accountNumber.length<11){
        alert('please provide valid number')
       return ;
    }
    if(addMoney<=0){
      alert("invalid number")
      return;
    }
    if(pinAdd!==validPin){
        alert('please provide valid pin')
        return;
    }
    const totalBalance=addMoney+AvailableBalance
   // document.getElementById('avail-balance').innerText=totalBalance
   setInnerText(totalBalance)
   const data={
      name:'Add Money',
     date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
 })
 //cashOut feature
  document.getElementById('Withdraw-money-btn')
 .addEventListener('click',function (e){
   e.preventDefault()
   const cashOutNumber=getValue('cash-out-number')
   const withdrawMoney=getInputNum('withdraw-amount') 
   const pinAdd=getInputNum('cashOut-pin')
  //  const AvailableBalance=parseInt(document.getElementById('avail-balance').innerText)
    const AvailableBalance=getInnerText('avail-balance')

    if(cashOutNumber.length<11){
        alert('please provide valid number')
       return ;
    }
    if(withdrawMoney<=0||withdrawMoney>AvailableBalance){
      alert('invalid amount')
      return
    }
    if(pinAdd!==validPin){
        alert('please provide valid pin') 
        return;
    }
    const totalBalance=AvailableBalance-withdrawMoney
    //document.getElementById('avail-balance').innerText=totalBalance
    setInnerText(totalBalance)
    const data={
      name:'Cash Out',
     date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
   console.log(transactionData)
 })
 //transfer money feature
  document.getElementById("transfer-money-btn")
 .addEventListener('click',function (e){
   e.preventDefault()
   const userAccountNumber=getValue("user-account-number")
   const transferAmount=getInputNum('transfer-amount') 
   const pinAdd=getInputNum('transfer-pin')
  //  const AvailableBalance=parseInt(document.getElementById('avail-balance').innerText)
    const AvailableBalance=getInnerText('avail-balance')

    if(userAccountNumber.length<11){
        alert('please provide valid number')
       return ;
    }
    if(transferAmount<=0||transferAmount>AvailableBalance){
      alert('invalid amount')
      return
    }
    if(pinAdd!==validPin){
        alert('please provide valid pin') 
        return;
    }
    const totalBalance=AvailableBalance-transferAmount
    //document.getElementById('avail-balance').innerText=totalBalance
    setInnerText(totalBalance)
    const data={
       name:'Transfer Money',
      date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
   // console.log(transactionData)
 })
//get bonus feature
   document.getElementById("bonus-button")
   .addEventListener('click',function(e){
        e.preventDefault()
       const bonusCupon=getInputNum("bonus-cuopon")
       if(bonusCupon!==cuopon){
         alert('please enter valid coupon')
         return
       }
 const AvailableBalance=getInnerText('avail-balance')
  const redeem=60
  const totalBalance=AvailableBalance+redeem
      setInnerText(totalBalance)
      const data={
       name:'bonus redeem',
      date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
   })
    
 //transaction
 document.getElementById("transaction-con")
 .addEventListener('click',function(){
   const transactionButton=document.getElementById("transaction-btn")
   transactionButton.innerText=''
   for(const info of transactionData){
      const division=document.createElement('div')
      division.innerHTML= `<div class="  bg-white rounded-xl p-3 flex justify-between items-center mt-3">
      <div class="flex items-center">
        <div class=" p-3 rounded-full bg-[#f4f5f7]">
            <img src="./assets/wallet1.png" alt="" class="mx-auto">    
        </div> 
        <div class="ml-3">
            <h1>${info.name}</h1>
            <p>${info.date}</p>
        </div>
      </div>
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>`
      transactionButton.appendChild(division);
   }
 })
 //function to toggle
 function handleToggle(id){
     const forms=document.getElementsByClassName('form')
   for(const fo of forms){
      fo.style.display='none'
   }
   document.getElementById(id).style.display='block'
 }
 //function to toggle border
 function toggleElement(element){
     const toggleBorder=document.getElementsByClassName('toggle-border')
    for(const toBor of toggleBorder){
      toBor.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
      toBor.classList.add('border-gray-300')
    }
     document.getElementById(element).classList.remove('border-gray-300')
    document.getElementById(element).classList.add('border-[#0874f2]','bg-[#0874f20d]')

 }
     
 //toggling feature
 document.getElementById('add-con')
 .addEventListener('click',function(){
   //  document.getElementById('cash-out-parent').style.display='none';
   //  document.getElementById('add-money-parent').style.display='block'
   //     document.getElementById("transfer-money-parent").style.display='none';
   // const forms=document.getElementsByClassName('form')
   // for(const fo of forms){
   //    fo.style.display='none'
   // }
   // document.getElementById('add-money-parent').style.display='block'
    handleToggle('add-money-parent')
   //  const toggleBorder=document.getElementsByClassName('toggle-border')
   //  for(const toBor of toggleBorder){
   //    toBor.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
   //  }
   //   document.getElementById('add-con').classList.remove('border-gray-300')
   //  document.getElementById('add-con').classList.add('border-[#0874f2]','bg-[#0874f20d]')
     toggleElement('add-con')
 })
 document.getElementById('cash-con')
 .addEventListener('click',function(){
   //  document.getElementById('add-money-parent').style.display='none';
   //  document.getElementById('cash-out-parent').style.display='block';
   // document.getElementById("transfer-money-parent").style.display='none';
   //  const forms=document.getElementsByClassName('form')
   // for(const fo of forms){
   //    fo.style.display='none'
   // }
   // document.getElementById('cash-out-parent').style.display='block'
    handleToggle('cash-out-parent')
    toggleElement('cash-con')
 })
 //
 document.getElementById("tran-con")
.addEventListener('click',function (){
   // document.getElementById("transfer-money-parent").style.display='block';
   //  document.getElementById('add-money-parent').style.display='none';
   //  document.getElementById('cash-out-parent').style.display='none';
   //  const forms=document.getElementsByClassName('form')
   // for(const fo of forms){
   //    fo.style.display='none'
   // }
   // document.getElementById('transfer-money-parent').style.display='block'
     handleToggle('transfer-money-parent')
     toggleElement('tran-con')
})
document.getElementById("bonus-con")
.addEventListener('click',function (){
   //  const forms=document.getElementsByClassName('form')
   // for(const fo of forms){
   //    fo.style.display='none'
   // }
   // document.getElementById('get-bonus-parent').style.display='block'
   handleToggle('get-bonus-parent')
   toggleElement('bonus-con')
})
document.getElementById('pay-con')
.addEventListener('click',function (){
   handleToggle('pay-bill-parent')
   toggleElement('pay-con')
})
document.getElementById("transaction-con")
.addEventListener('click',function (){
   handleToggle('transaction-parent')
   toggleElement("transaction-con")
})
 

       