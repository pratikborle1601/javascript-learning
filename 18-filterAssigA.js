


console.log(`-----------Given Array----------`);

const arrayNumber =[20,11,40,25,37,49,9,90,60,2,19];
console.log(arrayNumber);


console.log(`---------All number whichb greter than 50----------`);

const arraygreter = arrayNumber.filter( (element) => {

    return element >50;

} );

console.log(arraygreter);


console.log(`------------even  numbers-------------`);

const arrayEven = arrayNumber.filter( (element) => {

    return element %2 == 0;

} );

console.log(arrayEven);

console.log(`------------Odd  numbers-------------`);

const arrayodd = arrayNumber.filter( (element) => {

    return element %2 == 1;

} );

console.log(arrayodd);



console.log(`----------- number multiply by 5-------------`);

const arraymultiple = arrayNumber.filter( (element) => {

    return element%5==0;

} );

console.log(arraymultiple);



 console.log(`-----Number  which are beetween 20 and 50------`);

 const num=arrayNumber.filter((element)=>{
    return element>=20 &&element<=50;
 });

 console.log(num);
 




 