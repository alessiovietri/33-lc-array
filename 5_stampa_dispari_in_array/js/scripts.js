// creazione dell'array iniziale
//               0  1  2  3 ....               8
const numbers = [2, 7, 9, 18, 47, 22, 23, 25, 100];
console.log('numbers', numbers, typeof numbers);
console.log('Lunghezza array numbers', numbers.length);


for (let indice = 0; indice < numbers.length; indice++) {

    // console.log('indice', indice, typeof indice);
    // console.log('Elemento in posizione indice', numbers[indice], typeof numbers[indice]);

    // Voglio stampare solo i numeri dispari presenti nell'array
    // Un numero è dispari se il resto della divisione per 2 è uguale a 1
    if (numbers[indice] % 2 == 1) {
        console.log(numbers[indice], 'è dispari');
    }

}


for (let indice = 0; indice < numbers.length; indice++) {

    // console.log('indice', indice, typeof indice);
    // console.log('Elemento in posizione indice', numbers[indice], typeof numbers[indice]);

    // Voglio stampare solo i numeri dell'array che si trovano in un indice pari
    // Un numero è pari se il resto della divisione per 2 è uguale a 0
    if (indice % 2 == 0) {
        console.log("L'indice ", indice,'è pari e contiene il valore', numbers[indice]);
    }

}