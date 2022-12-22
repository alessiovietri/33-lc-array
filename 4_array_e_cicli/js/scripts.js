// creazione dell'array iniziale
//                  0       1         2
const iscritti = ["Luca", "Marco", "Paolo"];
console.log('iscritti', iscritti, typeof iscritti);
console.log('Lunghezza array iscritti PRE', iscritti.length);


for (let i = 0; i < iscritti.length; i++) {

    console.log('i', i, typeof i);
    console.log('Elemento in posizione i', iscritti[i], typeof iscritti[i]);

}



iscritti.push('Sara', 'Gianni');
console.log('Lunghezza array iscritti POST', iscritti.length);

console.log('iscritti', iscritti, typeof iscritti);
console.log('Lunghezza elemento in array', iscritti[3], iscritti[3].length);


for (let i = 0; i < iscritti.length; i++) {

    console.log('i', i, typeof i);
    console.log('Elemento in posizione i', iscritti[i], typeof iscritti[i]);

}