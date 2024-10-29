  
  function squareofWordLength(string){
      var strlength= string.length;
       var result= strlength * strlength;
       return result;
       

  }
 var returnValue = squareofWordLength("JavaScript")
   console.log(`Given string is: Javascript And its length is: ${returnValue} `);
   

   
   var returnValue= squareofWordLength("Google Crome")
   console.log(`Given string is:Google Crome and its  length is: ${returnValue}`);


   var returnValue= squareofWordLength("web Developer Smart")
   console.log(`Given string is:web Developer Smart and its  length is: ${returnValue}`);


   function string(str){
    var str= "I am Angular Developer"
     var strlength= str.length
     var word = str.split(" ")
     var totalword = word.length
     var Devide= strlength/totalword ;
     var multiply= strlength*totalword ;

     console.log(`Total no of length divide by total no word is: ${Devide} `);
     console.log(`Total no of length multiply by total no of  word is ${multiply}`);
     
   }
   string("I am Angular Developer")
   
