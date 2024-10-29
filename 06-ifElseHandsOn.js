

var evenorodd= function(num){
    if (num%2==0) {
        return "Even"
        
    } else {
        return "Odd"    
    }
}
var result = evenorodd(45);
console.log(`Is no 45 even or odd: ${result}`);

var result = evenorodd(70);
console.log(`Is no 70 even or odd: ${result}`);

var result = evenorodd(67);
console.log(`Is no 67 even or odd: ${result}`);

var result = evenorodd(98);
console.log(`Is no 98 even or odd: ${result}`);

console.log(`-----------------------------------------------------------`);


var voteEligibility = function (age) {
    if (age>=18) {
        return " You are eligible for Vote"
        
    } else {
        return " Sorry, You are not eligible"
    }
    
}
var result = voteEligibility (18)
console.log(`This person is eligible for vote or not age(18): ${result}`);

var result = voteEligibility (20)
console.log(` This person is eligible for vote or not age(20): ${result}`);

var result = voteEligibility (17)
console.log(`This person is eligible for vote or not age(17): ${result}`);

var result = voteEligibility (40)
console.log(`This person is eligible for vote or not age(40): ${result}`);

console.log(`-----------------------------------------------------------`);



 var  string = function(str) {
    if (str.length>10)
        {
        return "yes, string containt more than 10 charactor "
        
    } else {
        return " No, string contanint does not more than 10 charector "
    }
}
  var result= string("JavaScript-ES6")
  console.log(`If string  contain more than 10 charector or not ("JavaScript-ES6")  :${result}`);
 

  console.log(`-----------------------------------------------------------------`);
  



var string=function (str) {

    if (str.startsWith("Java")) {
        return "Given string start with Java"
        
    } else {
        return "Given string not start with Java"
        
    }
    
}

var result = string("JavaScript Language")
console.log(`If string strats with "Java" : "JavaScript Language" : ${result}`);


var result = string("Programming Language")
console.log(`If string strats with "Java": "Programming Language" :  ${result}`);

console.log(`------------------------------------------------------------`);





  