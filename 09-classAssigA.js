


console.log(`-------------Vehicle Details--------------`);


class Vehicle {
    company;
     color;
     type;
     mileage;
     price;

    constructor(company,color,type,mileage,price) {
        this.company=company;
        this.color=color;
        this.type=type;
        this.mileage=mileage;
        this.price=price
        
    }
} 
 const xuv = new Vehicle("Mahindra","Gray","XUV","17 km/h","17 lac");
 console.log(`-----------XUV3XO Deatail------------`);
 console.log(xuv);
 
 const hundai = new Vehicle("Hundai","Red","SUV","16 km/h","11 lac");
 console.log(`----------- Creta Deatail-----------`);
 console.log(hundai);

 const honda = new Vehicle("Honda","White","SUV","14 km/h","10 lac");
 console.log(` ---------- Amaze Deatail------------`);
 console.log(honda);

 const maruti = new Vehicle("Maruti Suzuki","Orange","SUV","17 km/h","8 lac");
 console.log(`---------Vitara Brezza Deatail---------`);
 console.log(maruti);

 const tata = new Vehicle("TATA","Gray","HatchBack","16km/h","11 lac");
 console.log(`--------------Tiago Deatail-----------`);
 console.log(tata);


 
console.log(`---------------Collage Details----------`);



 class Collage {
    Name;
    university;
    collgeCode;
    Department;
    City;
    
    constructor(Name,university,collgeCode,Department,City) {
       this.Name=Name;
       this.university=university;
       this.collgeCode=collgeCode;
       this.Department=Department
       this.City=City 
    }
    
    display() {
        console.log(`-----------${this.Name} Details---------`);
     console.log(`university: ${this.university}, CollageCode: ${this.collgeCode}, Department :  ${this.Department},City :  ${this.City}`);
    
     }

     display() {
        console.log(`-----------${this.Name} Details---------`);
     console.log(`university: ${this.university}, CollageCode: ${this.collgeCode}, Department :  ${this.Department},City :  ${this.City}`);
    
     }

     display() {
        console.log(`-----------${this.Name} Details---------`);
     console.log(`university: ${this.university}, CollageCode: ${this.collgeCode}, Department :  ${this.Department},City :  ${this.City}`);
    
     }

     display() {
        console.log(`-----------${this.Name} Details---------`);
     console.log(`university: ${this.university}, CollageCode: ${this.collgeCode}, Department :  ${this.Department},City :  ${this.City}`);
    
     }
    
 }
 
 
 
 const vmv= new Collage('VMV collage','SGBAU Amravati', 322, 6, 'Malkapur')

 vmv.display();

  const Kolte= new Collage('DR V B Kolte Collage','SGBAU Amravati', 302, 11, 'Malkapur')

 Kolte.display();

 
  const Raisoni= new Collage('G.H. Raisoni Collage','NMU Jalgaon', 147, 23, 'Jalgaon')

 Raisoni.display();


  const Shivaji= new Collage( 'Shivaji Collage','SGBAU Amravati', 365, 9, 'Buldana')
  Shivaji.display();

 