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
/* const results = document.getElementById('result');

fetch(`http://universities.hipolabs.com/search?country=Sweden`)
  .then(response => response.json())
  .then((data) => {
    data.forEach(uni => {
      results.innerHTML += `
  <div class="result">
    <h3>${uni.name}</h3>
  </div>
    `
    })

  });
     */




 
  /* 
  let results = document.querySelector('#result');

  fetch('http://universities.hipolabs.com/search?country=Sweden')
  .then(response => response.json())
  .then((data) => {
    data.forEach(uni => {
        results.innerHTML += `
        <div class="result">
        <h3>${uni.name}</h3>
        </div>
        `
    })
  }); */




  /* Webstorage */
  //Lagrar information i webbläsaren, lite som en databas
  //Inhämta mina inputs
/*   const firstName = document.querySelector('#firstname');
  const lastName = document.querySelector('#lastname');
  const age = document.querySelector('#age');
  const button = document.querySelector('#btn');
 */
/*   button.addEventListener('click', function(){
    
    //När man trycke rpå knappen så sparas infon i localstorage
    localStorage.firstName = firstName.value;
    localStorage.lastName = lastName.value;
    localStorage.age = age.value;
  });

  //Använd ej document write vid riktigt arbete utan endast för testning, samma sak som med prompt och alert
  document.write(
    localStorage.firstName,
    localStorage.lastName,
    localStorage.age
  );
 */
  //Sessionstorage
/*   button.addEventListener('click', function(){
    
    //När man trycke rpå knappen så sparas infon i localstorage
    sessionStorage.firstName = firstName.value;
    sessionStorage.lastName = lastName.value;
    sessionStorage.age = age.value;
  });

  //Använd ej document write vid riktigt arbete utan endast för testning, samma sak som med prompt och alert
  document.write(
    sessionStorage.firstName,
    sessionStorage.lastName,
    sessionStorage.age
  ); */

  //SetItem
  //Vi lagrar ett värde i ett objekt
  /* sessionStorage.setItem('Work', 'Educator');
  console.log(sessionStorage.getItem('Work'));
 */

  //Hantera större objekt inkl numbers
/*   let obj = {firstname: 'Tim', age:18};
  //Nu måste vi arbeta med Parse och Stringify för att kunna delvis lagra ovan objekt i webbläsaren samt hämta
  sessionStorage.setItem('users', JSON.stringify(obj));

  let objView = sessionStorage.getItem('Person');
/*   console.log(objView); */

/*   let objViewObj = JSON.parse(sessionStorage.getItem('Person'));
  console.log(objViewObj)
 */
// */
