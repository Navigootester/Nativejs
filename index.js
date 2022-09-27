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
console.log(currency + price); */


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




/* while, do...while och for */

