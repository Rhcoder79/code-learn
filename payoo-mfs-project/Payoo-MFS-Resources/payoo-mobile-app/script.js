console.log('hello world');
//login button functionality
document.getElementById('lobtn').addEventListener('click',function (e){
    e.preventDefault()
  //  console.log('touched');
    //console.log(e);
    const mobile=01880012667
    const pin=1470
    const phoneValue=document.getElementById('phone').value
    const pinValue=document.getElementById('pin-num').value
    const mobCon=parseInt(phoneValue);
    const pinCon=parseInt(pinValue);
   console.log(mobCon,pinCon);
   if(mobCon===mobile &&pinCon===pin){
    //console.log('all values maatche')
      window.location.href='./home.html'
   }else{
   alert('wrong info');
   }

});
