    

    let profesor = {
      Name: "Rahul Nikam",
      teachingSubject: "Physics",
      gender: "male",
      city: "Malkapur",
      email: "rahul001@gmail.com",
      collage: "VMV collage Malkapur",

      Certificates:["Hackers Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],
       degree :{
         
        bachelorsDegree: "Physics",
        mastersDegree: "MPhys",
        PhD: "physics",
        
       }

       



    }
    console.log(profesor);
    

    profesor.totalExp = "14 years"
    console.log(`Total Exprience is :${profesor.totalExp}`);
    console.log(`---------------------------------------------------------`);
   
    console.log(`Modifying existing property`);
     profesor.city= "Buldana";
     console.log(profesor);

     console.log(`----------------------------------------------------------`);

     console.log(`After adding New certificate`);
     
     profesor.Certificates.splice(2,0,"Oracle Certified")
     console.log(profesor.Certificates);
    

     console.log(`--------------------------------------------------------------`);
      
     console.log(`last element of array :${ profesor.Certificates[profesor.Certificates.length-1]}`);

     console.log(`---------------------------------------------------------------`);
       
     console.log(`-------Travers the array using for of loop-----`);
     const arrayCertificates = profesor.Certificates
     for (const element of arrayCertificates) {
           console.log(element);
           
     }
     
     
      
     
     
     

     
     
     
    
    

    
    