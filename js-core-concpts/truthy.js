let data;
data=0;
data='';// undefined/empty string is false
data=' '//has an white space is true
data='0';//true 
data=false;//false
data=true;//true
data=null;//false
data=undefined;//false
data={};//true;
data=[];//true
console.log(data);
if(data){
    console.log('value of data is truthy',data);
}
else{
    console.log(data,'is falsy' );
}
// if i need to capture the falsy into the truth block
//use logical not !
let check;
check=false;
console.log(check);
if(!check){
    console.log('inside if it is not true');
}else{
    console.log('inside if with a falsy value');
}

//capture all positive value
//double not !!
info=[];
if(!!info ===true){
    console.log('only true inside the double not')
}else{
    console.log('only false inside')
}
