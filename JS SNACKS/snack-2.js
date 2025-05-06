//* SNACK 2 //*
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti fatti" e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 

/////////////////////////////////////////////////////////////////////////////////////

//* RACCOLTA DATI //*
// Array
// proprietà di descrizione: nome, punti fatti, falli subiti;
// Il Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0;
// Generare numeri random al posto degli 0 nelle proprietà “punti fatti" e “falli subiti”;


/////////////////////////////////////////////////////////////////////////////////////

//* ESECUZIONE LOGICA //*
// Creare un array con il nome "squadre";
// Aggiungere 6 oggetti all'interno dell'array che saranno le squadre di calcio;
// ogni oggetto avrà la sua chiave che identificherà il nome della squadra, i punti fatti e i falli subiti;
// Creare una funzione per generare numeri random;
// Fare un ciclo for per assegnare i numeri casuali generati agli 0;
// Creare un nuovo array che contenga il nome e i falli subiti dalle squadre;
// Stampare array contenente nomi e falli subiti dalle squadre;


//* Array squadre di calcio //*
const squadre = [
    {nome: 'Chievoverona', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Torino', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Bologna', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Fiorentina', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Genoa', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
];

//* Funzione per generare un numero intero random da min a max //*
function generaNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//* Ciclo for per assegnare valori random a puntiFatti e falliSubiti //*
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = generaNumeroRandom(0, 100); // punti tra 0 e 100
    squadre[i].falliSubiti = generaNumeroRandom(0, 50); // falli tra 0 e 50
};

//* Array contenente nome e falli subiti di ogni singola squadra //*
const nomiEFalli = [];

for (let i = 0; i < squadre.length; i++) {
    const nuovaSquadra = {
      nome: squadre[i].nome,
      falliSubiti: squadre[i].falliSubiti
    };
  
    //* oggetto inserito nel nuovo array //*
    nomiEFalli.push(nuovaSquadra);
};

//* OUTPUT //*

//* Array stampato con tutti i dati delle squadre //*
console.log("Squadre con tutti i dati:", squadre);
//* Array stampato solo con nomi e falli subiti dalle squadre //*
console.log("Solo nomi e falli subiti:", nomiEFalli);