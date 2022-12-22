// creazione dell'array iniziale
//                  0       1         2
const iscritti = ["Luca", "Marco", "Paolo"];
console.log('iscritti', iscritti, typeof iscritti);

const sceltaLeo = parseInt(prompt('Caro Leo, scegli uno dei 3 elementi possibili (puoi inserire 0, 1 o 2):'));        // Se Leo sceglie 1...

// alert(sceltaLeo = iscritti); NON VA BENE PERCHE è UN'ASSEGNAZIONE (INOLTRE AD UNA CONST)
//           ...qui avrò valore 1
if(isNaN(sceltaLeo) || sceltaLeo < 0){
    alert('Valore non valido');
}
else{
    alert(iscritti[sceltaLeo]);
}