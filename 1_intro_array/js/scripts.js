// creazione dell'array iniziale
//                  0       1         2
const iscritti = ["Luca", "Marco", "Paolo"];
console.log('iscritti', iscritti, typeof iscritti);

// Voglio stampare Marco in console
console.log('Stamperò Marco?', iscritti[1]);

// Cosa succede se cerco di accedere all'indice 3?
console.log('Cosa stamperò?', iscritti[3]);             // Stampa undefined

// aggiunta di un elemento all'array
iscritti.push('Michele', 'Sara', 'Gianni', 'Pino');
console.log('iscritti', iscritti, typeof iscritti);

// Cosa succede se cerco di accedere all'indice 3?
console.log('Cosa stamperò?', iscritti[3]);             // Stampa Michele

// Cosa succede se cerco di accedere all'indice -1?
console.log('Cosa stamperò?', iscritti[-1]);             // Stampa undefined