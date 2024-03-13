// Chiedi un numero di 4 cifre all’utente 
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedi un numero di 4 cifre all’utente 
const userNumber = prompt('Dammi un numero di 4 cifre');

// Creo una variabile flag per la somma
let sumNumber = 0;

// Apro un ciclo for
for (let i=0; i < userNumber.length; i++) {

    console.log(userNumber[i]);
    // Sommo alla variabile ogni numero della stringa convertito in dato numerico
    sumNumber += parseInt(userNumber[i]);
    console.log(sumNumber);
}
