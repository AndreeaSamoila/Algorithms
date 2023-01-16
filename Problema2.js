// Problema 2: 
// Sa se calculeze, folosind instructiunea while, suma primelor n numere pare numere pare. 
// EX: Pentru n = 3, avem numerele 2,4,6 iar suma lor este 12

let n = 5;
let sum = 0; // primul numar par este 0, al doilea este 2, deci suma e din start 2
let par = 2;

while ( n > 0) {
    sum = sum + par;
    par = par + 2;
    n--;
}
console.log("Suma primelor n numere pare este: ", sum)