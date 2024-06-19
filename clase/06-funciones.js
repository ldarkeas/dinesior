//defina una lista de valores numeriso desordenada
//crear una funcion como parametro esa lista y devuelva la suma mas alta de los de los valores adyacentes
console.log('hola')
const lista = [1,1,3,2,3,1,8,9,9]
const listanueva = []


// function Sumamaxima(numeros)  {
    
for (let i = 0; i<lista.length-1; i++){

const suma = lista[i]+lista[i+1]
listanueva[i] = suma


}

console.log(Math.max(...listanueva))
console.log(listanueva)
// numeros = listanueva
// console.log(numeros)
// return numeros

// }

// }



