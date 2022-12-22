// creazione dell'array iniziale
//                  0       1         2
const iscritti = ["Luca", "MarcoAAAA", "Paolo"];
console.log('iscritti', iscritti, typeof iscritti);
console.log('Lunghezza array iscritti PRE', iscritti.length);

iscritti.push('Sara', 'Gianni');
console.log('Lunghezza array iscritti POST', iscritti.length);

console.log('iscritti', iscritti, typeof iscritti);
console.log('Lunghezza elemento in array', iscritti[3], iscritti[3].length);