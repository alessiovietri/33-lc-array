// creazione dell'array iniziale
//               0  1  2  3 ....               8
const numbers = [2, 7, 9, 18, 47, 22, 23, 25, 100];
console.log('numbers', numbers, typeof numbers);
console.log('Lunghezza array numbers', numbers.length);


for (let i = 0; i < numbers.length; i++) {

    // console.log('i', i, typeof i);
    // console.log('Elemento in posizione i', numbers[i], typeof numbers[i]);

    // Voglio stampare solo i numeri dispari presenti nell'array
    // Un numero è dispari se il resto della divisione per 2 è uguale a 1
    if (numbers[i] % 2 == 1) {
        console.log(numbers[i], 'è dispari');
    }

}


for (let i = 0; i < numbers.length; i++) {

    // console.log('i', i, typeof i);
    // console.log('Elemento in posizione i', numbers[i], typeof numbers[i]);

    // Voglio stampare solo i numeri dell'array che si trovano in un indice pari
    // Un numero è pari se il resto della divisione per 2 è uguale a 0
    if (i % 2 == 0) {
        console.log("L'indice ", i,'è pari e contiene il valore', numbers[i]);
    }

}