 
  const name='md rh' //global scope // jeta outside mane sob jaigai use kora jai  

  if(true){
    const data=40;//block scope because you can not use outside of the block
    console.log(data,name);//block scope because you can not use outside the block
    doMath(44,56);
  }
  //
  for(const num of[1,2,3,4,5,6]){

  }

  //function scope or local scope 
  function doMath(a,b){
      //  console.log(doubleIt(50))
      
   
    console.log(a,b);
     console.log(doubleIt(30)) //it can not declare to upper of the parameter and outside of the function
         console.log(doubleIt(10))//it can not declare to upper of the parameter and outside of the function
    const sum=a+b;
     console.log(doubleIt(20)) //it can not declare to upper of the parameter and outside of the function
    const total=sum+10;
      console.log(doubleIt(50))//it can not declare to upper of the parameter and outside of the function
    function doubleIt(x){
        return x*2
    }
    console.log(doubleIt(40))
  }
  