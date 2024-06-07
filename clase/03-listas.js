const numeros = [1,2,3,4,5];
numeros.push(6);//agregar un numero al final
//numeros.push('hola')
//numeros.unshift('inicio')


//numeros.pop();//elimina el ultimo elemento
//numeros.shift();//elimina el primero
 

//numeros.splice(2,1);//elimina el elemnto en la psicion 2


//delete numeros[2];
console.log(numeros)
//console.log(typeof numeros[2]);

let nombre = 'juna'
// nombre.startsWith()
console.log(nombre.length);
console.log(nombre[2]);

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])

}

const postres = ['pie', 'helado', 'dona']
// for (let postre of postres){
// console.log(postre)

// }

for (let [postre, index] of postres.entries()){
    console.log(postre, index)
    
    }
