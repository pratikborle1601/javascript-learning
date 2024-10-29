console.log(`What is difference between == and === (Strictly equal)`);

var n1 = 10; var n2 = "10"; var n3 = 20;

 

var result = n1 == n3; // 10 == 20

console.log(`Double equal == Operator: ${result}`); // false

 

var result = n1 == n2; // 10 == "10"

console.log(`Double equal == Operator: ${result}`); // true

 

var result = n1 === n2; // 10 === "10"

console.log(`Triple equal or strictly equal === Operator: ${result}`); // false