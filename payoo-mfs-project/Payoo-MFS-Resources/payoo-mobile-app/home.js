  
console.log('home js file connected');
const validPin=3690
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
    if(pinAdd!==validPin){
        alert('please provide valid pin')
        return;
    }
    const totalBalance=addMoney+AvailableBalance
   // document.getElementById('avail-balance').innerText=totalBalance
   setInnerText(totalBalance)
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
    if(pinAdd!==validPin){
        alert('please provide valid pin') 
        return;
    }
    const totalBalance=AvailableBalance-withdrawMoney
    //document.getElementById('avail-balance').innerText=totalBalance
    setInnerText(totalBalance)
 })

    