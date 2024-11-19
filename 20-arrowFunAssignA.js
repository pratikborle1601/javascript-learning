

console.log(`----- Arrow Function with no argument and no return value----`);

let sentence = () =>{
    console.log(`Good Morning, Today is Tuesday`);

    
}
sentence();

console.log(`---- Function with 3 argument and no return value----`);

let multiply =(n1,n2,n3) =>{

    let result= n1*n2*n3;
    console.log(`multiplication of (5,5,2) is: ${result}`);
    

}
multiply(5,5,2);


let multiplication =(n1,n2,n3=1) =>{

    let result= n1*n2*n3;
    console.log(`multiplication of (10,4) is: ${result}`);
    

}
multiplication(10,2);

console.log(`-----------Function with 5 argument and and return value------------`);

let addition = (n1,n2,n3,n4,n5) =>{

     let result =n1+n2+n3+n4+n5;
     return result;

    
     
}
let sum =addition(100,100,200,349,756);
console.log(`Given num addition is: ${sum}`);


let addstr = (n1,n2,n3,n4,n5) =>{

    let result =n1+n2+n3+n4+n5;
    return result;

   
    
}
let  concat =addstr(" I am " ," learning "," ES6 "," feature "," in depth ");
console.log(concat);



