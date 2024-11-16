


  const employee =`{
    "name": "Aleix Melon",
    "id": "E00254",
    "role": ["Dev","DBA"],
    "age": 24,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32 Loham St",
        "city": "Innsbuck",
        "country":"Austria"
    },
    "referredv-by":"E0012"
  }`;
    
    
  const employeeInfo =JSON.parse(employee);
  console.log(employeeInfo);

  console.log(`----------------Employee role--------------`);

  console.log(employeeInfo.role[0]);

  console.log(`---------Last Name-------------`);
  console.log(employeeInfo.name.split(" ")[1]);
  

  console.log(`-------------Joining year of Employee-----------`);

  console.log(employeeInfo.doj.split("-")[2]);
  
  
  
  
  


