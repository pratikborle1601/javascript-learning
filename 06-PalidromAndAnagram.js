
  

  console.log(`----------------------------Palindrome-----------------------------------`)
  function Palindrome(str) {
      
      const cleanedStr = str.replace().toLowerCase();
      const reversedStr = cleanedStr.split('').reverse().join('');    
    
      if (cleanedStr === reversedStr) {
          console.log(`${str} :     palindrome`);
      } else {
          console.log(`${str} :   not a palindrome`);
      }
  }
  
  Palindrome("Madam"); 
  Palindrome("Dad");   
  Palindrome("Hello"); 
  
  console.log(`------------------------Anagrams----------------------------------`)
  function Anagrams(str1, str2) {
      
      const sortedStr1 = str1.replace().toLowerCase().split('').sort().join('');
      const sortedStr2 = str2.replace().toLowerCase().split('').sort().join('');
  
      if (sortedStr1 === sortedStr2) {
          console.log(`${str1}, ${str2}:    are Anagrams `);
      } else {
          console.log(`${str1}, ${str2} :    not Anagrams `);
      }
  }
  
  Anagrams("silent", "listen"); 
  Anagrams("hello", "world");   
  Anagrams("such", "much");