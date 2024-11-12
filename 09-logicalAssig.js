

let array=[10,20,45,30,77,60];
console.log(`Given array is: ${array}`);
let evenNumCount=0
for (const element of array) {
    if (element%2==0) {
     
    
    evenNumCount=evenNumCount+1;


        
    }
    
}
console.log(`Even num count is: ${evenNumCount}`);


const mylove="I love only JavaScript";
console.log(`Given string is:${mylove}`);

const vowel="aeiou";
let vowelcount=0;
for (const char of mylove) {
     if (vowel.includes(char.toLowerCase())) {
        vowelcount = vowelcount+1;
     }
    
}
console.log(`Vowels count is: ${vowelcount}`);


const sentence = "JavaScript LANGUAGE";
console.log(`Given sentence is: ${sentence}`);
let charcount=0;
 for (const char of sentence) {
    if (char=='a' ||char=='A') {
        charcount = charcount +1;
    }
    
 }
console.log(`a char count is : ${charcount}`);



