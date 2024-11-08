

const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"]
console.log(fruits_seasonal);

console.log("====Log the firt and last element on console======");

const first=fruits_seasonal[0]
console.log(first );

const Last =fruits_seasonal[fruits_seasonal.length-1]
console.log(Last );

console.log("======Add element papaya before the element Banana========");
 fruits_seasonal.unshift("Papaya")
console.log(fruits_seasonal);

console.log("=======remove mango from array=====");

fruits_seasonal.splice(4,1)
console.log(fruits_seasonal);

console.log("=====Insert the element 'Pineapple' at the last position=======");
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);

console.log("========Insert an element 'Dragon Fruit' before 'Water Melone'=============");

fruits_seasonal.splice(4,0,"Dragone fruit")
console.log(fruits_seasonal);

console.log("========Replace an element 'orange' with 'kiwi'==========");

fruits_seasonal.splice(2,1,"Kiwi")
console.log(fruits_seasonal);

console.log("========element starting from 1 to 4 ======");

 const result=fruits_seasonal.slice(1,4);
console.log(result);

console.log("======slelect last 3 element======");

const last3=fruits_seasonal.slice(fruits_seasonal.length-3)
console.log(last3);










