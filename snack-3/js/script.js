// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, 
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Seleziono i due div assegnandogli lo style color rosso e verde
// ROSSO
const firstText = document.querySelector('#first');
console.log(firstText);
firstText.style.color = 'red';
// VERDE
const secondText = document.querySelector('#second');
console.log(secondText);
secondText.style.color = 'green';

// Creo un array di numeri
const numberList = [1,2,3,4,5,6,7,8,9];
console.log(numberList);

// Creo un ciclo for
for (let i=0; i<numberList.length; i++) {
    
    // Creo una variabile per il conteggio dei numeri nell'array
    const thisNumber = numberList[i];
    
    // Se il numero in questione è dispari,il div verrà stampato nel div rosso
    if (thisNumber%2 !== 0) {        
         const oddNumber = `
          <div>
              ${thisNumber}
          </div>
          `;
          firstText.innerHTML += oddNumber;

    // altrimenti se è dispari, il div verrà stampato nel div verde
    } else {    
         const evenNumber = `
          <div>
              ${thisNumber}
          </div>
          `;          
          secondText.innerHTML += evenNumber;    
     }
}
