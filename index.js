
/*Välkommen till Native Javascript Kursen 2022!
I denna fil kommer all JS kod att publiceras allt efterssom vi går igenom varje 
sektion på lektionerna.
Kommentarer och termer kommer att genomföras på engelska för att ni lättare sen kan 
arbeta som i branschen.
De kod-projekt som kommer göras under kursens gång läggs på annan sida.
Övertygad om att ni kommer klara det här jättebra och önskar alla lycka till!!*/


/* Konsolen, script-elementet och kommentarer */
/* 1. Konsollen 2. Script elementet 3. Kommentarer */
/*
1. Konsollen öppnar man genom att antingen:
- Högerklicka och trycka på inspektera, därefter trycka på konsol
eller
- På Mac opt+cmd+j
- På PC ctrl+shift+k (eller ctrl+shift+j)

Kod kan skrivas direkt i konsollen, exempel:
alert("hej");
Eller logga i konsollen direkt, exempel:
console.log("hej");

2. Scriptelementet lägger ni direkt på er html sida (innan body taggen slutar eller inom head elementet längst upp): <script src"länk-till-er-fil"><script> 

3. Kommenterar gör man med //= för en rad eller som i css 
Kommentera ut kod snabbt på PC tryck control och *
För att kommentera flera rader på MAC tryck opt+Shift+A
*/
//"Hej", enkelrad
/* "Hej richard"
"Hej richard" , dubbelrad*/


/* Variabler, Konstanter och datatyper */
/* 1. Variables, 2. Contants and 3. data types */

/* 1. Variables */
//https://www.dummies.com/article/technology/programming-web-design/javascript/naming-javascript-variables-142522/
//Variabel är en låda eller behållare för att "lagra" information
//och att hämta information
//Man säger att man ska använda const i första hand och let om man verkligen
//vet att variabeln ska kunna ändras, men detta är ingen regel
//https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/
//Let, Går att ändra, Block Scoped
//Var, Går att ändra,  Function Scoped, kan inhämtas överallt i hela scriptet
//Const, Bestämma värdet (declare) direkt ,Block scoped 
//Se mer om scope här:
//https://medium.com/nerd-for-tech/function-scope-block-scope-in-js-d29c8e7cd216
//Exempel, let firstName = "Richard";
//Exempel, let age = 18;
//Exempel, let car = true;
//Multiple variables in one go
/*(använd comma om det är två numbers om ni 
    ej vill "plussa dom")*/
/* let currency = 'SEK', price = 299;
console.log(currency  price); */


/* 2. Constants , you decide one time what the variable is */
/* const firstName = "Richard" */
//you have to declare it once



/* 3. Data Types */

//Number (heltal och decimaltal)
//Boolean (ger true eller false)
//String (text)
//Null (Förväntade sig ett värde exempelvis inmatning av förnamn i ett formulär )
//Undefined (Förväntar sig en viss typ av information, värde)

//String example
/* let string = "String";
let string2 = 'String';
 */
//Number example
/* let number = 10;
let number2 = 10.01;
let number3 = -10.01; */

//Boolean example
//To be used in loops etc, if something is true or false
//let true1 = true;
//let false1 = false;

/* Några exempelvärden
string	'Hej!' och "Hej!"
number	2, 3.14 och -1
boolean	true och false
null	null
undefined	undefined
 */
//isnan is not a number
//Number.isNaN(123);


/* Operatorer för aritmetik (och strängsammanslagning) */
/* Operators and String Concatenation */

/* 1. Operators */
/* De fyra räknesätten (+, -, * och /) */
//Med plus kan man även:
//Lägga ihop strängar typ console.log("Hej" + "då")
//Öka eller minska
//++, ökar med 1, istället för att ex. skriva age + 1, age++
//--, minskar med 1, istället för att ex. skriva age - 1, age--
//let age = 20;
//Ändra den önskade variabeln innan ni loggar ut
//age++
//console.log(age);


/* 2. String Concatenation */
//Adding strings together
/* console.log("Hello" + " World!" + " Richard") */


//Template Literals (more dynamic)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
/* console.log(`Hello ${number}`) */
/* let click;
URL(`https://tasteline.se${click}`)  */
//https://tasteline.se/pizza



//Logiska Operatorer
//&& and
//|| or
// ==
// if(23 == "23") GÖR EJ SÅHÄR
//=== Strict operator, båda värden måste överensstämma på vänster och höger sida
//== Loose qualtiy operator, exempel, "23" == 23 tolkas som true och båda som ett nummer...
// 1<2  (True, 2 är större än 1)
// 1 === 2 (false, 1 är inte samma som 2 (värdena matchar ej))
// 2 === "hej", (false, ett nummer och en sträng, och står ej samma)
// 2 => 2 (true, lika med 2 men ej större än 2, den går igenom, dvs true)

//Exempel på and, or
/* const hasLicense = true;
const hasNotLicence = false; */

//Nedan ska utvärderas till true eller false
//&&, och, and
//Båda stämmer
//console.log(hasLicense && hasNotLicence);
//||, eller, or
//Har antingen eller
//console.log(hasLicense || hasNotLicence);

//If sats som kollar om man har körtkort eller inte
/* if(hasLicense && hasNotLicence){
    console.log("har du eller inte?")
}
else {
    console.log("confirmed")
}
 */

//Conditional Ternary Operator
// condition ? value1 : value2
//Exempel 1:
//let voteable = (age < 17) ? "Too young" : "U can vote"
//Är ett if else statement med endast en rad!
//Exempel 2 (mer kod men samma sak):
/*if(age < 17){
   console.log("Too young")
}else{
     console.log("U can vote")
}
*/



/* if och else, samt switch */
/* Conditional Statements
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed */

/* if statement/*
/* Syntax for if statement */
/*
if (condition) {
  block of code to be executed if the condition is true
}else{
    block of code to be executed if the condition is false
}
*/
/* Example */
/*
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

*/

/* else if statement syntax */

/* 
if (condition1) {
  block of code to be executed if condition1 is true
} else if (condition2) {
  block of code to be executed if the condition1 is false and condition2 is true
} else {
  block of code to be executed if the condition1 is false and condition2 is false
}
*/

/* Example */
/* 
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/

/*Javascript Switch statement*/

/* Syntax for switch */

/* switch(expression) {
  case x:
    code block
    break;
  case y:
    code block
    break;
  default:
    code block
} */


/* Example */
/* let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
} */


/* while, do...while och for */
/* Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true */

/* Javascript FOR loop */
/* The FOR loop */
/* Syntax */
/* 
for (expression 1; expression 2; expression 3) {
  code block to be executed
}
*/
/* Example */
/* 
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

PS. Assignment operator += means x=x+y,
and in this case: text + "The number is " + i + "<br>";
*/
/* Expression */
/*
Expression 1
Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).
This is not always the case. JavaScript doesn't care. Expression 1 is optional.
You can initiate many values in expression 1 (separated by comma):
*/
/* Example */
/*
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

Expression 2
Often expression 2 is used to evaluate the condition of the initial variable.
This is not always the case. JavaScript doesn't care. Expression 2 is also optional.
If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.

PS.
If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. 
*/

/* 
Expression 3
Often expression 3 increments the value of the initial variable.
This is not always the case. JavaScript doesn't care. Expression 3 is optional.
Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
Expression 3 can also be omitted (like when you increment your values inside the loop):
*/
/* Example */
/*
const cars = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let len = cars.length;
let text = "";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
*/

/* The while loop 
The while loop loops through a block of code as long as a specified condition is true.
*/
/* Syntax */
/* while (condition) {
  code block to be executed
} */
/* Example */

/* let i = 0;

while (i < 10) {
  i++;
  console.log(i)
}; */

/* Do While loop */
/* The do while loop is a variant of the while loop. 
This loop will execute the code block once, before checking if the condition is true, 
then it will repeat the loop as long as the condition is true.
 */
/* Syntax */
/*/*
do {
    code block to be executed
  }
  while (condition); */
/* Example */
/*

let i = 0;

do {
 console.log(i)
  i++;
}
while (i < 10); 
*/

//If statements

/* let hour = prompt("Vad är klockan");
 if(hour < 13){
  console.log("En härlig dag!")
 }else{
  console.log("Matkoma")
 } */

 // While loop
 /* let i = 2;
 let names = ["richard", "axel", "berit"];

 while (i < names.length){
   console.log(names[i])
   i++
  
 }; */

 //While do loop
 /* let i = 0;

 do{

  console.log(i)
  i++;
 }while(i < 10); */

/* for(let i = 10; i >= 0; i--){
  console.log(i)
}; */
/* 
let day = 3;

 */

/* let a = [34, 46, 48]
a.push(3); 
console.log(a)
console.log(a.length)
a.pop()
console.log(a) */


//En vanlig array

/* let a = [1, 2, 3, 400, 5] */
//Manipulera array genom att gå direkt på variabeln
/* a = [100, 105, 34.5, 1] */
//Loopar ut hela arrayen
/* console.log(a) */
//Loopar ut ett värde ur en array
/* console.log(a[2]) */

//Loopar igenom min array med for loop metoden
/* for (let zero = 0; zero < a.length; zero++){
  console.log(a[zero])
}
 */
//Loopar igenom min array med while loop metoden
/* let zero = 0;

while(zero < a.length){
  console.log(a[zero])
  zero++
} */

/* let a = [1, 2, 3, 400, 5] */
//Lägga till ett värde i slutet av en array med (push)
/* a.push(200)
console.log(a) */

//Ta bort det sista värdet i min befintliga array med (pop)
/* a.pop()
console.log(a) */




// Göteborg Jacket kostar 599
/* console.log(`${product.name} kostar ${product.price} `) */

//OBJEKT
//Skapar ett objekt med en produkt som innehåller flera nycklar och värden


/* let product = {
  candy:'chokladkaka',
  price: 250
}
//Ändrar priset i objektet
product.price = 290

//Ändrar typ av produkt(candy) till kanelbulle
product.candy = 'kanelbulle'

//Loggar ut information från objektet
console.log(product)
 */
/* let p = 'price';
let product = {
  candy:'chokladkaka',
  price: 250
}
//Ändrar priset i objektet
product[p] = 329

//Ändrar typ av produkt(candy) till kanelbulle
product.candy = 'kanelbulle'

//Loggar ut information från objektet
console.log(product) */

/* let cars = {
  audi: {model:525, price:199000, condition:'bad'}
}

for (let n = 0; n < cars.audi.length; n++) {
  console.log(cars.audi)
} */

/* let cars = {

  audi:[{model:525, price: 199, condition:'Bad'},
        {model:526, price: 499, condition:'Bad'}],

  bmw: {model:325, price:299 , condition: 'Good'}

}

for (let n =0; n < cars.audi.length;n++){

}

console.log(cars.audi) */

//tom array
/* let = [] */

//Array innehållande värden
/* let a = ['Richard', 42, true] */

//Ändra ett värde i en array
/* let a = ['Richard', 42, true]
a[1] = 43
console.log(a) */

//Lägga till ett värde
/* let a = ['Richard', 42, true]
a.push(2)
console.log(a) */

//Ta bort ett värde
/* let a = ['Richard', 42, true, 2]
a.pop()
console.log(a) */

//Plocka ut värden ur en array (slice)
/* let a = [1, 2, 3, 4]
console.log(a.slice(1,3)) */

//Plocka ut första värdet ur en array
/* let a = [1, 2, 3, 4]
let firstElement = a.shift()

console.log(a) */

//Lägg in ett till värde i början av en array
/* let a = [2, 3, 4]
a.unshift(1)
console.log(a) */

//Loopa igenom en array
/* let a = [1, 2, 3, 4]

for(let i = 0; i < a.length; i++ ){
  console.log(a[i])
} */

/* let x

while (x === '' || isNaN(x) || x === null) {
  x = prompt()
}

for (let n = Number(x); n > 0; n--) {
  alert()
} */

/* let name = prompt('Vad heter du?')

if (name !== null && name !== '') {
  alert('Hej...')
  alert(name)
}  */

//Hur kollar vi om ett nummer angetts


/* 
let number = 0

while (number < 0) {
   
  console.log(number)
  number++
} */

/* for(let number = 0; number <= 3; number++){
    console.log(number)
} */

/* let numbers = [1, 2, 3, 4]

let n = 0

while (n <= numbers.length) {
  console.log(numbers[n])
  n++
} */

/* let numbers = [1, 2, 3, 4]

for(let n = 0; n < numbers.length; n++){
    console.log(numbers[n])
} */

/* var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
   
console.log(arr.splice(2, 7)) */

/* let p = 'price';

let product1 = {
    type: 'Jeans',
    brand: 'Lee',
    price: 499
}

product1[p] = 399


console.log("Dessa " + product1.type + " kostar " + product1.price )
console.log(`Dessa ${product1.type} kostar ${product1.price}`)
 */

//Object in an object (nested)
/* let cars = {
    audi: {model:'a4', price:199000, condition:'bad'},
    audi2: {model:'a6', price:399000, condition:'bad'},
    bmw: {model:'520', price:399000, condition:'good'},
    bmw2: {model:'525', price:399000, condition:'good'}

  }

for(let i=0;i < cars.length; i++){
    cars.audi.condition
} */

//Function in an object

/* const store2 = (name, color) => {
    const type2 ={
        name:name,
        color: color,
        price: 100,
        qty:2,
        total: function() {
            return this.price * this.qty;
        }
    }
    const info = `You have recieved ${type2.name} with the color of ${type2.color}
    total price of ${type2.total()}`//total is a method therefore you need () after total

    return info
    
}

console.log(store2('Lee', 'blue')) */



//Using Json and objects
/* 
let user = `[
  {
      "firstName" : "Richard",
      "age" : 42,
      "company" : "It-Högskolan",
      "Egenskaper" : ["Javascript", "React"]

  },
  {
      "firstName" : "Bertil",
      "age" : 23,
      "company" : "Volvo"

  }
]`
console.log(JSON.parse(user)[1].age)

 */
//Fetch
//Lite termer

/* Cors */
/* Cross-Origin Resource Sharing (CORS) är en HTTP-header-baserad mekanism som gör att en server 
kan indikera alla ursprung (domän, schema eller port) förutom sitt eget från vilket en webbläsare 
ska tillåta laddning av resurser. CORS förlitar sig också på en mekanism genom vilken webbläsare gör en 
"preflight"-begäran till servern som är värd för korsursprungsresursen, för att kontrollera att servern tillåter 
den faktiska begäran. I den preflighten skickar webbläsaren rubriker som indikerar 
HTTP-metoden och rubriker som kommer att användas i den faktiska begäran.
 */

/* Body */
/* En body är data som skickas av klienten till ditt API. 
En body request är den data som ditt API skickar till klienten. 
Ditt API måste nästan alltid skicka en svarstext. 
Men klienter behöver inte nödvändigtvis skicka begäranden hela tiden. */

/* Promise */
/* En promise är en proxy för ett värde som inte nödvändigtvis är känt när det (promise) skapas. 
Det låter dig associera hanterare med en asynkron handlings eventuella framgångsvärde eller misslyckande. 
Detta låter asynkrona metoder returnera värden som synkrona metoder: istället för att omedelbart 
returnera det slutliga värdet, returnerar den asynkrona metoden ett löfte om att 
leverera värdet någon gång i framtiden.

En promise finns i ett av dessa tillstånd:

väntande: initialt tillstånd, varken uppfyllt eller avvisat.
uppfyllt: vilket betyder att operationen slutfördes framgångsrikt.
avvisad: vilket betyder att operationen misslyckades. */


/* GET */ 
//Tid för inspelning 43:29 den 24 okt, Richard nämner
//att nedan kan användas för att testa så "responsen" fungerar på det
//önskade API man valt
//Fetch exempel för att få reda på api:ets respons
/* fetch('https://avancera.app/cities/')
.then(res => console.log(res)) //Promise, ett löfte om att fråga och få ett svar tillbaka
 */
//Fetch exempel för att få reda på api:ets data
/* fetch('https://avancera.app/cities/')
 .then(res => res.json()) //Ger ytterligare en promise därför kör vi en .then till nedanför för att hämta data
.then(data => console.log(data)) */

//Fetch exempel för att få reda på api:ets data och en utvald data som ej (id) finns (ger en 404)
/* fetch('https://avancera.app/cities/0')
.then(res => res.json()) 
.then(data => console.log(data)) */

//Fetch exempel för att få reda på api:ets data och en utvald data som finns (id)
/* fetch('https://avancera.app/cities/5347da70-fef3-4e8f-ba49-e8010edba878')
.then(res => res.json()) 
.then(data => console.log(data)) */


//Get
//Exempel där ni ser hur ett anrops respons ser ut
/* fetch('https://avancera.app/cities')
.then(res => console.log(res)) */

//Se datan på servern
/* fetch('https://avancera.app/cities')
.then(res => res.json())
.then(data => console.log(data)) */

//Anropar exempelvis ett id som ej finns
/* fetch('https://avancera.app/cities/0')
.then(res => res.json())
.then(data => console.log(data)) */

//Anropar exempelvis ett id som ej finns
/* fetch('https://avancera.app/cities/5347da70-fef3-4e8f-ba49-e8010edba878')
.then(res => res.json())
.then(data => console.log(data)) */

//Post data med fetch
/* fetch('https://avancera.app/cities/', {
//Anger metod som ska göras  
method: 'POST',
  //Skickar med en header
  headers: {
    'Content-Type': 'application/json'
  },
  //Ange vilken data som ska in i bodyn
  body: JSON.stringify({
    "name": "Ankeborg-stad",
    "population": 12
  })
})
//Skapar en promise att responsen är korrekt och att det är i ett json format
.then(res => {
  //Skapar en retur i fetch funktionen
  return res.json()
})
.then(data => console.log(data)) */



//Fetch
//Exempel på hur en respons från en server 
//ser ut i en GET förfrågan
/* fetch('https://avancera.app/cities')
.then(res => console.log(res))  */

//Få ut datan med hjälp av fetch och GET
/* fetch('https://avancera.app/cities')
//Skapar ett löfte om att servern svarar tillbaka och 
//berättar sen att responsen ska vara i json format
.then(res => res.json())
//skapar ett löfte till om att nu vill vi hämta ut
//datan 
.then(data => console.log(data))
 */

//Nu ska vi inhämta information från ett enskilt
//objekt (men på fel sätt)
/* 
fetch('https://avancera.app/cities/5347da70-fef3-4e8f-ba49-e8010edba878')
.then(res => res.json())
.then(data => console.log(data))
 */

//Post Data
/* fetch('https://avancera.app/cities/', {
  body: JSON.stringify({ "name": "Axels-stad", "population": 123 }),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
})
  .then(response => response.json())
  .then(result => {
    console.log(result)
  })  */


  //Repetition av funktioner
  //Funktionsdeklaration - function declaration
  //Semikolon är ej nödvändigt på slutet

  //Det enda nedan gör är att logga ut ett meddelande
/*   function hello (){
   /*  console.log("Hej på er") */
  

  //Invoke, man ropar på funktionen
 /*  hello() */


 //Function expression 
 //där vi lagrar hela funktionen inuti en variabel
//Semikolon användas

/* const speak = function(){
  console.log('hej')
}

speak(); */

//Lägger till 1 variabel i parametern i min function expression-funktions-uttryck
/* const speak2 = function(name){
 console.log(`Hejsan alla ${name}`)
};

speak2('Fullstackutvecklare') */

//Lägger till 2 variabler i parametern i min function expression-funktions-uttryck
/* const speak3 = function(name, name2){
  console.log(`Hejsan alla ${name} och ${name2}`)
 };
 
 speak3('Fullstackutvecklare', 'Javascriptutvecklare')
  */

 //Samma som ovan men för att undvika undefined så förutbestämmer vi ett värde
 /* const speak4 = function(name3 = "Javautvecklare", name4 = "Pytonutvecklare"){
   return (`Hejsan alla ${name3} och ${name4}`);
 } */
 

 //speak4("Frontendutvecklare", "Javascriptutvecklare")

 //För att få ut ett värde ur en funktion skapas en variabel
/*  let b =  speak4("Frontendutvecklare", "Javascriptutvecklare")
 console.log(b) */

 //Return
 //Function expression som räknar ut radius av ett tal
 /* const calcArea = function(radius){
  return 3.14 * radius**2; 
 } */

 //För att inhämta värdet(returen) använder vi nedan en variabel som
 //både kallar på funktionen och ger den ett argument
 //let area = calcArea(5);


 //en funktion till som använder returvärdet från annan funktion

/*  const areaMessage = function (area){
    return "Arean är " + area;
 }

 let message = areaMessage(area)
 console.log(message)

 //Arrow funktion version 1
 const calcArea2 = () => 
   3.14 * radius**2; 

 //Arrow funktion version 2, om vi returnerar direkt behövs ej curly braces eller namnet return
 const calcArea3 = () => 
   3.14 * radius**2; 
  */
 


   /* DOM och noder */
   //Skapat av webläsaren
   //Kallas 'document' object
   //I konsollen skriv document.(se vilka metoder som kan användas, testa document.URL osv)
   //Hierarki med noder, ser ut som ett träd och det längst ut (löven) är noderna

   //Skapa variabel och hämta något i dokumentet
   //Queryselector, bästa sättet, välj ut selector
   //väljer första elementet, går uppifrån och ned


/*    const para = document.querySelector('p');
   console.log(para); */

   //Komma åt en annan p tagg
   //väljer den med klass, sätt . eller # om det är id

  /*  const para = document.querySelector('.error');
   console.log(para);
 */
   //Komma åt den andra error klassen, vill komma åt divens error class (finns bara en)

   /* const para = document.querySelector('div.error');
   console.log(para); */

   //Osäker på selector, högerklicka i konsollen visa vilken och använd
   // ">" är child selector
   
  /*  const para = document.querySelector('body > div:nth-child(2) > p:nth-child(1)');
   console.log(para); */

  //Göra något med alla p taggar?

  /* const paras = document.querySelectorAll('p'); */
  //Visar en Nodelist (kan man köra en for loop eller en foreach)
  //Liknar en array men det är det egentligen inte men liknande användning
  /* console.log(paras)  */

  //Komma åt det första i listan?
 /*  console.log(paras[0])  */

 //Göra en foreach?, kallas group nodes
/*  paras.forEach(para =>{
     console.log(para)
 }) */

 //Leta upp alla error klasser?
 /* const errors = document.querySelectorAll('.error');
 console.log(errors) */

 //Get element by id
/*  const title = document.getElementById('title')
 console.log(title)  */

 //Get element by class, ger en HTMLkollektion vilket ej kan jämföras
 //med en nodelist och kan därför ej loopas igenom eller köra foreach
/*  const title = document.getElementsByClassName('title2')
 console.log(title)  */
//få ut värdet går dock
/* console.log(title[0])  */ 

//Get elements by their tag name
/* const paras = document.getElementsByTagName('p');
///ger också en HTML kollection
console.log(paras)
  */

//Därför är det mest användbart att använda querySelector


//Manipulera noder
/* 
const para = document.querySelectorAll('p');
console.log(para) */
//Property that gives us the property
//console.log(para.innerText)

//Ändra texten
//para.innerText = 'hej på er'
//Använda metoden "append"(+), lägger till
//para.innerText += 'hej på er'

//Ändra alla p taggar
/* const paras = document.querySelectorAll('p'); */
//Ger oss en Nodelist och då kan vi göra en foreach och en callback function
/* paras.forEach(para => {
console.log(para.innerText);
//Uppdatera allt
para.innerText = 'Hej';
 }); */


//Ändra HTML i ett element
//const content = document.querySelector('.content');
//Visar innehållet i div
//console.log(content.innerHTML);

//Byta ut innehållet
//content.innerHTML = '<h2>Nu har vi bytt ut innehållet</h2>';

//Byta ut innehållet och appenda
//content.innerHTML += '<h2>Nu har vi bytt ut innehållet</h2>';

//Får en lista från en databas med en array av personer som vi sen vill byta ut
//Bra exempel på hur det kan användas
/* const people = ['Richard', 'Fanny', 'Hassan'];

people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
});
 */

//Jobba med attribut

//const link = document.querySelector('a');
//Get attribute
//console.log(link.getAttribute('href'));
//Change an attribute with setAttribute
/* link.setAttribute('href', 'https://www.iths.se');
console.log(link.getAttribute('href'));
 */
//Ändra länknamnet
//link.innerText = 'Bästa skolan';




/* Document Object Model "DOM" */

//Det är webläsaren som har skapat detta och det kallas för document
//Testa i konsollen och skriv document så finner ni hela webbläsarens 
//html innehåll
//DOM innehåller en hierarki av noder
//Richard tipsar att använda querySelector (åtkomst till det första elementet)
//För att komma åt innehållet så ska en variabel skapas

/* const para = document.querySelector('p');
console.log(para);
 */

//Komma åt en annan p tagg som kanske har en class eller ett id
//
/* const para = document.querySelector('.error');
console.log(para); */
//Ett id
/* const para = document.querySelector('#title');
console.log(para); */

//Komma åt elementnod samt innehållsnod
//> Kallas för child selector
/* const para = document.querySelector('body > div:nth-child(4) > p.error');
console.log(para); */

//Se alla p taggar
//const paras = document.querySelectorAll('p');
//Få ut info om hur många paragrafer som finns, en så kallad nodelist
//https://developer.mozilla.org/en-US/docs/Web/API/NodeList
/* console.log(paras); */

//Få ut en av flera paragrafer ur "Nodelisten"
//console.log(paras[0]); 

//Om vi vill få ut en (loop) av alla pargrafer (går endast om det är en NodeList)
//ForEach tekniken (group nodes)
//Völjer att få ut det enskilt (singular=para)
//Skulle kunna använda vilket namn som helst
//Call-back funktion 
//https://www.simplilearn.com/tutorials/javascript-tutorial/callback-function-in-javascript
/* paras.forEach(para => {
  console.log(para);
}) */

//getElementByID
//Här är det ej nödvändigt att använda # för att komma åt elementet
/* const title = document.getElementById('title');
console.log(title); */

//Tid 11:01
//getElementsByClassName
//Här är det ej nödvändigt att använda . för att komma åt elementet
//Det som kommer ut av detta är en HTMLCollection, denna kan vi ej köra en foreach på
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
/* const errorMessage = document.getElementsByClassName('error');
console.log(errorMessage[1]);
 */

//Få tag i element via taggar
//Tid 2:26
//<p> en tagg
//Behöver ej ange annat taggens namn
/* const paras = document.getElementsByTagName('p');
console.log(paras); */

/* Manipulation av DOM */
//Tid 2:29
//const para = document.querySelector('p');
//console.log(para.innerText);

//Ändra innehållet
//Tid 2:31
//para.innerText = 'Hej på er, inget är angivet i tid :)';

//Append, lägga till
//Tid 2:32
//https://developer.mozilla.org/en-US/docs/Web/API/Element/append
//(+)är append, lägger till och  (=)är tilldela

/* para.innerText += " Javisst, nu är det tillagt";
console.log(para); */

//Ändra alla p taggar i HTML dokumentet
//Tid 2:38
//const paras = document.querySelectorAll('p');

//Genomför en Foreach för att få ut all P information
/* paras.forEach(para => {
  console.log(para);
  //Ändrar alla P element
  para.innerText += ' hej';
}); */

//Ändra HTML i ett element till ett element
//Tid 2:42
//Exempel <p> till <h2>
//const content = document.querySelector('.content');
//console.log(content.innerHTML);
/* content.innerHTML = '<h1></h1>'; */



//Få ut en array med namn från exemelvis en databas
/* const people = ['Eddie', 'Fanny', 'Johan']; */
//Tid 2:48
//Få ut varje person från arrayen i DOM
//Är mycket vanligt att man inhämtar information från en array och ska 
//få ut detta i DOM
/* people.forEach(person => {
  content.innerHTML += `<p>${person}</p>`;
}); */

//Tips från Eddie: clg + tab = console.log

//Avsnitt Attribut
//Tid 04:16

//getAttribute, inhämtar ett attribut exempelvis "href" i en länk
//const link = document.querySelector('a');

//Vart länkas man till just nu?
//console.log(link.getAttribute('href'));

//Ändra ett attribut då använder vi något som kallas setAttribute
//setAttribute('Vilket attribut' , 'vad vi vill ändra till')
//Skulle lika gärna kunna fungera med ett annat attribut som tex "src"
//och ändra bildlänk
/* link.setAttribute('href', 'https://www.iths.se');
console.log(link); */

//Ändra texten i innehållet, använd innerText
/* link.innerText = 'Bästa skolan'; */

//ClassList
//Tid 4:26
//Ändra och se ett elements klasser

/* const element = document.querySelector('#some-element');
console.log(element.classList) */
//Då visas alla klasser som finns i elementet, DOMtokenList
//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList

//Manipulera en klass
//Remove, tar bort klass
//element.classList.remove('btn-primary');
//Add, lägger till en klass
//element.classList.add('btn-success');

//Frågeställning om en klass innehåller ett visst värde (namn)
//contains
//Kollar med boolean om nedan knapp är ett visst värde, ger true eller false
//Kan användas i sammanhang om man vill köra en jämförelse för att sedan utföra en viss
//aktivitet
//console.log(element.classList.contains('btn-success'));

//Styling
//Tid 04:39
//I vårt exempel har vi ett element med ett id som heter message
//const element = document.querySelector('#message');
/* console.log(element.style);
console.log(element.style.color); */

//Ändra styling
/* element.style.color = 'crimson';
element.style.backgroundColor = '#000';
element.style.marginLeft = '50px';

const bg = document.querySelector('body');
bg.style.backgroundColor = '#000'; */

//ComputedStyle
//tid 05:01
//Computedstyle hjälper oss att se ett elements aktiva egenskaper
/* console.log(getComputedStyle(element).color);
console.log(getComputedStyle(element).height); */

/* addEventlistener */
//Lyssnar på event
//Skapar variabler för nå de tre färglagda "lådorna" grandparent, parent och child klasserna
/* const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child'); */

//Väljer att lägga till 2 parametrar i en addeventlistener (man kan ha flera)
//Lägger även till en event callback function för att se i loggen info om den markerade ytan

/* grandparent.addEventListener('click', e => {
  console.log(e)
}) */

//Väljer Target för det är den mest användbara i listan och för att komma åt elementet vid klick
/* grandparent.addEventListener('click', e => {
  console.log(e.target)
}) */
//Kan även få 2st att fungera samtidigt
/* grandparent.addEventListener('click', e => {
  console.log(e.target)
})
 */

//Använda function ihop med en eventlistener

//Först väljer vi att skapa en listener för ex grandparent
//I parametern väljer att skriva eventet först sen kommatecken och vad den ska göra 
//grandparent.addEventListener('click', bg);

//skapar funktionen som ska aktiveras och göra något, i vårt fall byta färg
/* function bg () {
  grandparent.style.backgroundColor = 'pink';
} */

//Lägga till en eventlistener utan elementobjekt
//addEventListener('click', onKeyDown)
//Exempelfunktion 
/* function onKeyDown() {
  console.log('En tangent har tryckts ner.')
}

addEventListener('keydown', onKeyDown) */

//Visar i konsollen vilka events som finns under konsoll, källor och brytpunkter
//Visar W3schools event lista:
//https://www.w3schools.com/jsref/dom_obj_event.asp


/* Komma åt formulärvärden */

//const input = document.querySelector('input').value;
//Visar värdet som finns med value
//console.log(input);


//Känner av hur värdet ändrats med en funktion
/* document.querySelector('input').addEventListener('input', () => {
  console.log('Värdet har ändrats')
})
 */

//Och vad värdet har ändrats till med target.value
/* document.querySelector('input').addEventListener('input', event => {
  console.log('Värdet har ändrats till', event.target.value)
}) */

//Kollar värdet i en checkbox är tru eller false
/* document.querySelector('input[type="checkbox"]').addEventListener('input', event => {
  console.log('Värdet har ändrats till', event.target.checked)
}) */

//Kollar värdet i radio buttons (Richards modernare tips med en foreach istället för en for loop)
//Radio buttons måste loopas igenom
/* const radios = document.querySelectorAll('input[type=radio][name="nationality"]');
    radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));

 */

    //Nedan ger en logg på vart man befinner sig på X och Y axeln i webbläsaren
    //Tid 02:48 24 okt
  /*   function onMouseMove(event) {
      console.log(event.clientX, event.clientY) // Koordinat
    }
    
    document
      .querySelector('#heading')
      .addEventListener('mousemove', onMouseMove) */


    /* Events */
    //Tid 04:08
    //Skapar 3st variabler som inhämtar 3 olika "divar" i min HTML
    //Som vi nu ska arbeta med
   /*  const grandparent = document.querySelector('.grandparent');
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');
 */
    //Skapar en lyssnare som lyssnar efter klick och därefter
    //visar upp "eventet"
   /*  grandparent.addEventListener('click', e => {
      console.log(e)
    });
 */

//"Target" väljer ut exakt det elementet vi ska arbeta med
     /*  grandparent.addEventListener('click', e => {
      console.log(e.target)
    });
 */

//Byter ut bakgrundsfärgen vid "click" med hjälp av en function
//Tid 04:16
//Icke global lyssnar pga att vi i nedan exempel har
//valt ut diven "grandparent"
//en funktion som sätts igång vid klickning
/* function bg (){
  grandparent.style.backgroundColor = 'pink';
} */

//Skapar en lyssnare som inhämtar en function vid klick
//grandparent.addEventListener('mouseover', bg);

//Global lyssnare som ej tar hänsyn till något särskilt
//element
//Tid 04:26

/* function action () {
  document.body.style.backgroundColor = 'pink';
  prompt("Hej vilken färg vill du ha som bakgrund")
} */

/* addEventListener('click', action); */

/* function keyDown () {
  console.log("en tangent har tryckts ned")
}

addEventListener('keydown', keyDown);
 */

/* Åtkomst till webbformulär */
//Tid 04:57
/* const input = document.querySelector('input').value;
console.log(input); */

//Känner av hur värdet ändras
/* document.querySelector('input').addEventListener('input', () => {
  console.log("Värdet har ändrats")
}) */

//Visa vilket värde det har ändrats till
/* document.querySelector('input').addEventListener('input', event => {
  console.log("värdet har ändrats till ", event.target.value);
});
 */

//Kollar om checkboxen är ifylld, bekräftar i form av ett boolean värde, true or false
/* document.querySelector('input[type="checkbox"]').addEventListener('input', event =>{
  console.log("Boxen har ifyllts ", event.target.checked);
}); */

//Radio Buttons
//Kan vara användbar i ovan......
//Använder forEach för att se vilka av de befintliga radio knapparna som är ifyllda
 //const radios = document.querySelectorAll('input[type="radio"][name="nationality"]');
 //Gör en foreach för att se alla värden
 //radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));


//FEU 22 Genomgång av "Lyssnare"

//Tid 04:33
//Demo av ett tangenttryck, ändrar bakgrund i DOM
/* function onKeyDown() {
  let bg = document.querySelector('body');
  bg.style.backgroundColor = "black";
}
addEventListener('keydown', onKeyDown) */


//X och Y koordinater
/* function onMouseMove(event) {
  console.log(event.clientX, event.clientY) // Koordinat
}

document
  .querySelector('#heading')
  .addEventListener('mousemove', onMouseMove) */

//Tid 04:56
//Demo av "lyssnare"
//Skapar variabler som är förberedda för manipulation
/* const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
 */
//Se info om eventet
//Tips: Gå in på konsollen>källor>brytpunkter för händelselyssnare
//Se even flera eventtyper här:
//https://www.w3schools.com/jsref/dom_obj_event.asp
//https://stackoverflow.com/questions/35936365/what-exactly-is-the-parameter-e-event-and-why-pass-it-to-javascript-functions
//Läs mer om "e" här: http://api.jquery.com/category/events/event-object/

/* grandparent.addEventListener('click', e =>{
  console.log(e)
} ) */

//Ändrar färg på "grandparent" när jag rör musen över
/* function bg (){
  grandparent.style.backgroundColor = 'pink';
} */
//Ändrar färg på "grandparent" när jag rör musen ur den 

/* grandparent.addEventListener('mouseover', bg);

function bg2 (){
  grandparent.style.backgroundColor = 'black';
}

grandparent.addEventListener('mouseout', bg2);

 */

//Global lyssnare
//Tid 05:15
/* addEventListener('keydown', onKeyDown);

function onKeyDown (){
  console.log("Alla är nu väldigt taggade men trötta")
} */

//Ser om en input har ändrats i konsollen
/* document.querySelector('input')
.addEventListener('input', () => {
  console.log('Värdet har ändrats')
}) */

//Få ut värdet från inputen
//använder vi event.target.value
/* document.querySelector('input')
    .addEventListener('input', event => {
      console.log('Värdet har ändrats till', event.target.value)
    });
 */

//Man kan loopa igenom radio buttons (modernare tips att ta med sig)
/* const radios = document.querySelectorAll('input[type="radio"][name="nationality"]');
radios.forEach(radio => radio.addEventListener('change', () => alert(radio.value)));


 */

/* Webstorage */
/* localStorage, sessionStorage */

//localStorage
/* 
Låter oss spara data så att dessa finns kvar när användaren besöker vår sajt nästa gång 
(så länge användaren inte rensar sitt “browser cache”)
Bra vid avbrott vid uppkoppling
Endast strängar kan sparas
sessionStorage-värden är “per flik”, medan localStorage är “permanenta”
setItem/getItem används för att sätta/hämta värden, där varje värde är 
associerat med en nyckel
JSON.stringify och JSON.parse är användbara för att spara mer komplicerade värden
*/
//https://mdn.github.io/dom-examples/web-storage/




