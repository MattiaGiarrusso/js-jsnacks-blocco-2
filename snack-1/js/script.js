// L'utente inserisce un numero nel prompt,
// se è pari stampa il numero,
// se è dispari stampa il numero successivo

// chiedere all'utente un numero

let numberUser = parseInt(prompt('Dammi un numero'));

// se è pari stampa il numero,
if (numberUser%2 !== 0) {
    numberUser++
    console.log(numberUser);
    alert(numberUser);
    
// se è dispari stampa il numero successivo
} else {
    console.log(numberUser);
    alert(numberUser);
}