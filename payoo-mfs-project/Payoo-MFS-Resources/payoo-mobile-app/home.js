console.log('home js file connected');
 document.getElementById('Add-money-btn')
 .addEventListener('click',function (e){
   e.preventDefault()
   console.log('nice to ')
   const selectBank=document.getElementById('bank').value
   const accountNumber=document.getElementById('ac-num').value
   const addMoney=parseInt(document.getElementById('add-amount').value)
   const pinAdd=document.getElementById('add-pin').value
   //console.log(selectBank,accountNumber,addMoney,pinAdd);
    const AvailableBalance=parseInt(document.getElementById('avail-balance').innerText)
    //console.log(AvailableBalance);
    const totalBalance=addMoney+AvailableBalance
    document.getElementById('avail-balance').innerText=totalBalance
 })