//* SNACK 1 //*
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

/////////////////////////////////////////////////////////////////////////////////////

//* RACCOLTA DATI //*
// Array
// proprietà di descrizione: nome e peso

/////////////////////////////////////////////////////////////////////////////////////

//* ESECUZIONE LOGICA //*
// Creare un array con il nome "biciclette";
// Aggiungere 6 oggetti che saranno le biciclette;
// ogni oggetto avrà la sua chiave che identificherà che cosa é seguita dal peso;
// Creare una variabile di appoggio supponendo che la prima bicicletta sia quella più leggera per confrontarla con le altre successivamente;
// Utilizzare ciclo for per confrontare il peso delle biciclette;
// Stampare bicicletta con peso minore.


const biciclette = [
    { nome: 'Blu', peso: 8 },
    { nome: 'Gialla', peso: 10 },
    { nome: 'Verde', peso: 7 },
    { nome: 'Viola', peso: 9 },
    { nome: 'Arancione', peso: 20 },
    { nome: 'Grigia', peso: 15 },
];

let bicileggera = biciclette[0];
console.log(bicileggera.peso);

for (let i = 0; i < biciclette.length; i++) {
    const bicicletta = biciclette[i];
    if (bicicletta.peso < bicileggera.peso) {
        bicileggera = bicicletta;
    }
}

console.log(bicileggera);