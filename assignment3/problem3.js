/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
 var splice=fileName.slice(0,1);
 var pdf=fileName.slice(-4);
 var docs=fileName.slice(-5);
 if(splice.includes('#') || pdf.includes('.pdf') || docs.includes('.docx')){
    console.log('Store')
 }else{
    console.log('Delete');
 }

