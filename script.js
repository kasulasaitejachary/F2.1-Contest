const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
    { name: "saiteja", age: 26, profession: "developer"}
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i=0; i<data.length; i++){
        if(data[i].profession=='developer'){
            console.log(data[i].profession);
        }
    }
  }
  
  // 2. Add Data
  function addData() {
    let info = window.prompt();
    data.push(info);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i=0; i<data.length; i++){
        if(data[i].profession=='admin'){
           delete data[i].profession;
        }
    }
    console.log(data) 
}
  
  // 4. Concatenate Array
  function concatenateArray() {
    let data2 = [{name: "Saiteja", age: 25, profession: "Software developer"}];
    console.log(data.concat(data2));
  }
  
  // 5. Average Age
  let AgeSum=0,c =0;
  function averageAge() {
    for(let i=0; i<data.length; i++){
        AgeSum+= data[i].age;
        c=c+1;
  }
  console.log(AgeSum/c);
}
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0; i<data.length; i++){
        if(data[i].age>25){
            console.log('Yes');
        }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
     const uniqueProffesions = {};
     for(let i=0; i<data.length; i++){
        const profession = data[i].profession;
        uniqueProffesions[profession] = true;
     }
     const uniqueProffesionsArray = Object.keys(uniqueProffesions);
    console.log(uniqueProffesionsArray);

  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log("sorted by age ascending order", data)
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0; i<data.length; i++){
        if(data[i].name==="john"){
            data[i].profession = "manger";
            break;
        }
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
  let developerCount = 0;
  let adminCount = 0;
  for(let i=0; i<data.length; i++){
  const professionCount = data[i].profession;
  if(professionCount=='developer'){
    developerCount++;
  }
  else if(professionCount=='admin'){
    adminCount++;
  }
  }
  console.log("Total Developers",developerCount);
   console.log("Total Admins",adminCount);
  }