
function stringHandsOn(){
    var string="     Hey you are doing good, keep it up    "
    console.log(`1.GFiven string is: ${string}`);
    console.log(`2.Length of string is: ${string.length}`);
    var result= string.trim()
    console.log(`3.After triem string is: ${result}and its length: ${result.length}`);
   console.log(`4.First char: ${result.charAt(0)} & last char is:${result.charAt(result.length-1)}`);
   var resultValue=result.split(" ")
   console.log(`5. Total count of word: ${resultValue.length}`);
   console.log(`6.The index of word good is: ${result.indexOf("good")}`);
   console.log(`7.Substring starting from index 22: ${result.substring(22)} `);
   console.log(`8.String ends with word up:${result.endsWith("up")}`);
   console.log(`9.String start with word Hey:${result.startsWith("Hey")}`);
   
   
   

   
      
    
}
 stringHandsOn()
