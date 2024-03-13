// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, 
// poi la parola più lunga.

// Chiedere due parole in successione, con due prompt.

const userWordOne = prompt('Inserisci una parola');
// console.log(userWordOne.length);

const userWordTwo = prompt('Inserisci una parola');
// console.log(userWordTwo.length);

// stampa prima la parola più corta
if (userWordOne.length>userWordTwo.length) {
    console.log(userWordOne);
} else {
    console.log(userWordTwo)
}