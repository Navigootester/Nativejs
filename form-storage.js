//Inhämtar inputs
/* const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const age = document.querySelector('#age');
const button = document.querySelector('#btn');
 */
//Skapar en function vid knapptryck
//button.addEventListener('click', function(){
    //alert() Testar att knappen funkar

    //Skapar en sparningsfunktion med localstorage
    //obs firstname osv kan heta vadsomhelst men det är så vi tilldelar en "nyckel"
    //till lagringen
/*     localStorage.firstName = firstName.value;
    localStorage.lastName = lastName.value;
    localStorage.age = age.value;

}); 
 */
//Testar att skriva ut
/* document.write(
    localStorage.firstName,
    localStorage.lastName,
    localStorage.age

)  */

//Skapar en function vid knapptryck
//button.addEventListener('click', function(){
    //alert() Testar att knappen funkar


    //Skapar en sparningsfunktion med localstorage
    //obs firstname osv kan heta vadsomhelst men det är så vi tilldelar en "nyckel"
    //till lagringen
/*     sessionStorage.firstName = firstName.value;
    sessionStorage.lastName = lastName.value;
    sessionStorage.age = age.value;

}); */

//Testar att skriva ut
/* document.write(
    sessionStorage.firstName,
    sessionStorage.lastName,
    sessionStorage.age

) */

//Set Item
//Lagrar key och value i webbläsarens minne (som en databas )
//sessionStorage.setItem('Work', 'Programmer');
//Hämtar min "item" genom att referera till min "key" med getItem
//console.log(sessionStorage.getItem('Work'));

//Hantera objekt med storage
//let obj = {firstname:'Richard', age:18 }; 
//Efterssom session och localstorage jobbar med strängar så använder vi här
//parse och stringify som ni nu lärt er

//Set item av objektet
//sessionStorage.setItem('person', JSON.stringify(obj)); 
//Se objektet som sträng
//let objView = sessionStorage.getItem('person');
/* console.log(objView); */

//Konvertera det till ett js objekt med parse
//let objViewObj = JSON.parse(sessionStorage.getItem('person'));
/* console.log(objViewObj);  */







//Fetch data
fetch(`http://universities.hipolabs.com/search?country=Sweden`)
.then(response => response.json())
.then(data => {
    console.log(data)
    let content = '';

   
    //Taking the data and mapping the information
    data.map(p => {

  

    //Proceeding to "paint my HTML Dom"
      content += `
     
       
   
                 <div><p>${p.name}</p></div>    
                
     
      `
     


    });
    

    document.querySelector("#university").innerHTML = content;
    

}).catch (error => {
    console.log(error)
})