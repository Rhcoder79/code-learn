  const validPin=3690
console.log('home js file connected');
 document.getElementById('Add-money-btn')
 .addEventListener('click',function (e){
   e.preventDefault()
   console.log('nice to ')
   const selectBank=document.getElementById('bank').value
   const accountNumber=document.getElementById('ac-num').value
   const addMoney=parseInt(document.getElementById('add-amount').value)
   const pinAdd=parseInt(document.getElementById('add-pin').value)
   //console.log(selectBank,accountNumber,addMoney,pinAdd);
    const AvailableBalance=parseInt(document.getElementById('avail-balance').innerText)
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
    document.getElementById('avail-balance').innerText=totalBalance
 })
     
 //toggling feature
 document.getElementById('add-con')
 .addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display='none';
    document.getElementById('add-money-parent').style.display='block'
 })
 document.getElementById('cash-con')
 .addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cash-out-parent').style.display='block';
 })
 