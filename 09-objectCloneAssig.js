
console.log(`-+-----Creat object 'BankSbi' with 4 properties-------------`);

 let bankSbi ={
    bankName:"SBI",
    acholderName:"Pratik",
    acNo: 214578946434,
    ifscCode: 4787945785,


 }
console.log(bankSbi);


console.log(`--------- Creat object 'bankLocation ' with properties----------`);

 let bankLocation ={
     street :"Main road near Honda Showroom",
     city:"Malkapur",
     pin: 443101
 }

 console.log(bankLocation);
 

  const Cloneproperties =Object.assign({},bankSbi,bankLocation)
  console.log(`Cloned banksbi and banklocation `);
  console.log(Cloneproperties);

 console.log(`Crete the object  'rateOfInterest'  `);
 
  let rateOfInterest ={
       homeLoneInterest: "14%",
       personalLoneInterest: "18%",
       dueInterest:"28%",


  }

  console.log(rateOfInterest);

  const sbiDetails =Object.assign({}, bankSbi,bankLocation,rateOfInterest)
  
  console.log(`----------The Bank details is---------`);
  console.log(sbiDetails);

  
  console.log(`----------Traverse marge object Using for in loop ------------`);
  for (const key in sbiDetails) {
    if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
        const element =sbiDetails[key];
        
    }
    
    console.log(`${key}=>${sbiDetails[key]}`);
   }

  


  
  
  

 

