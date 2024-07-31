// const numeros = [1,2,3,4,5];
// numeros.push(6);//agregar un numero al final
// //numeros.push('hola')
// //numeros.unshift('inicio')


// //numeros.pop();//elimina el ultimo elemento
// //numeros.shift();//elimina el primero
 

// //numeros.splice(2,1);//elimina el elemnto en la psicion 2


// //delete numeros[2];
// console.log(numeros)
// //console.log(typeof numeros[2]);

// let nombre = 'juna'
// // nombre.startsWith()
// console.log(nombre.length);
// console.log(nombre[2]);

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i])

// }

// const postres = ['pie', 'helado', 'dona']
// // for (let postre of postres){
// // console.log(postre)

// // }

// for (let [postre, index] of postres.entries()){
//     console.log(postre, index)
    
//     }



const numeros = [1, 2, 3, 4, 5];

numeros.push(6); // Agrega un elemento al final del array
numeros.push('Hola')
numeros.unshift('Inicio')
numeros.pop(); // Elimina el último elemento del array
numeros.shift(); // Elimina el primer elemento del array

// delete numeros[2]; // Elimina el elemento, pero deja un espacio vacío (undefined)

// param1: la posicion a partir de la cual que quiero eliminar
// param2: la cantidad de elementos que quiero eliminar
numeros.splice(2, 1); // elimina el valor por completo

console.log(typeof numeros[2]);

let nombre = 'Juan Alvarenga'

console.log(nombre.length);

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

//? [ [0,'Torta'], [1, 'Helado'], [2, 'Gelatina'] 
const postres = ['Torta', 'Helado', 'Gelatina', 'Flan'];


// el metodo .entries() retorna un array de arrays
// donde el primer elemento es el indice y el segundo es el valor
// los corchetes, me permiten desestructurar el array
// y asignarle un nombre a cada uno de los elementos
for (let [index, postre] of postres.entries()) {
    console.log(index, postre);
}
