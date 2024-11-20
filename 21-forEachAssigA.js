

console.log(`Given Array`);

const arrayNumber =[1,-7,40,502,-77,91,0,108,89,-601];

console.log(arrayNumber);

arrayNumber.forEach((element, index)=> { 
    console.log(`element: ${element}        index :${index}`);
    
});

console.log(`----------Positive Element in the array------------`);
    
arrayNumber.forEach(element => {
    

    if (element>=0) {
      console.log(element);
        
    }

    
});


console.log(`-------------Negative number  add into new array---------------`);

const negativeNumbers = [];
arrayNumber.forEach(element => {
  if (element < 0) {
    negativeNumbers.push(element);
  }
});
console.log(negativeNumbers);


console.log(`--------Even num from  given array---------`);

arrayNumber.forEach(element => {
    

  if (element%2==0) {
    console.log(element);
      
  }

  
});


console.log(`-----------sum of all element given array-----------`);
let  sum =0;

for (let index = 0; index < arrayNumber.length; index++) {
  sum+=arrayNumber[index]
  
}
console.log(sum);


console.log(`--------even index  array and value------------`);

arrayNumber.forEach((element,index)=> {
    

  if ( index% 2==0) {
    console.log(`Index : ${index}   Value:${element}`);
      
  }

  
});
