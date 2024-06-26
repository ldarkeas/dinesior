//defina una lista de valores numeriso desordenada
//crear una funcion como parametro esa lista y devuelva la suma mas alta de los de los valores adyacentes
// console.log('hola')
// const lista = [1,1,3,2,3,1,8,9,9]
// const listanueva = []
 
// for (let i = 0; i<lista.length-1; i++){

// const suma = lista[i]+lista[i+1]
// listanueva[i] = suma


// }

// console.log(Math.max(...listanueva))
// console.log(listanueva)


function Sumaad (lista){
    const listanueva = []
    for (let i = 0; i<lista.length-1; i++){

    const suma = lista[i]+lista[i+1]
    listanueva[i] = suma
    }

    const maximo = Math.max(...listanueva);
    return maximo;
}
// const lista = [1,1,3,2,3,1,10,9,9]
const lista = [-1,-5,-7,-8,-8,-5,-1,-1]
const maximoprueba = Sumaad(lista);
console.log("El valor de las sumas adyacentes es:", maximoprueba);


////////////////////




const exec = {
    test: saludar
}

function saludar(nombre, apellido) {
    // console.log("Hola mundo");
    return `Hola ${nombre} ${apellido}`;

}

// let sumar = (a, b) => a + b
let sumar = function (a, b) {
    return a - b
}

const dividir = ({ denominador, numerador }) => {

    if (denominador === 0) {
        throw 'No se puede dividir por cero'
    }
    return numerador / denominador
}

const test = () => {
    console.log('Hola mundo');
}

const contenido = saludar('Alvarenga', 'Juan');

// saludar() = "Hola mundo2"; // ❌ No se puede reasignar

try {
    console.log(dividir({ denominador: 0, numerador: 3 }));
} catch {
    // alert('kiapasaoo')
}
console.log(contenido);
console.log(saludar('Pedro'));
console.log(saludar(124));
console.log(exec['test']());

console.log(sumar(3, '2'));


const datos = { b: 2, a: 3, c: 5, rating: { rate: 124, count: 235 } }
const { count, rate } = { rate: 2.3, count: 100 };


const miniPrueba = [3, 6, 4, 9, 5, 6, 7, 9, 2]

const sumaAdyacente = (numeros) => {
    let sumaAcumulada = 0;

    for (let i = 0; i < numeros.length - 1; i++) {
        const suma = numeros[i] + numeros[i + 1]
        if (suma > sumaAcumulada) {
            sumaAcumulada = suma
        }
    }
    return sumaAcumulada
}

console.log(sumaAdyacente(miniPrueba))