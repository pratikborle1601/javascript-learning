
console.log(`-------Given Array-------`);

const arrayNumber = [20,11,40,25,23,11,9,31,60,2,19];
console.log(arrayNumber);

console.log(`-------Add 10 into each element --------`);

const addNum = arrayNumber.map((element) =>{
return element+10;

});
console.log(addNum);

console.log(`------------------cube the each element------------------`);

const cubenum = arrayNumber.map((element) =>{
    return element*element*element;
    
    });
    
    console.log(cubenum);


    console.log(`---Add the index value into its corresponding each array element----`);
    
    const addindexValue = arrayNumber.map((element,index) =>{
        return element+index;
        
        });
        
        console.log(addindexValue);
    