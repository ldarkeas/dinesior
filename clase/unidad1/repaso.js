


// function suma(a, b) {

//     return new Promise((resolve, reject) => {
//         resolve(a + b)
//     })

//     //era el valor originar, pero se cambio por el valor de la promesa
//     return a + b;
// }

// async function resta(a, b) {


//     const resultado = await division(a, b)

//     if (resultado === Infinity) return

//     return new Promise((resolve, reject) => {

//         const random = Math.random()

//         if (random > 0.5)
//             resolve(a - b)
//         else
//             reject('No se pudo realizar la resta')


//     }
//     )
// }

// const division = async (a, b) => {
//     return a / b;
// }

// resta(5, 3).then(resultado => {
//     console.log(resultado)
// })


// async function calcularCosas() {
//     const resultadoSuma = await suma(2, 3);
//     const resultadoResta = await resta(5, 3);

//     return resultadoSuma + resultadoResta;

// }

// console.log(suma(2, 3)); // 5
// console.log(resta(5, 3)); // 2

////////////

//ejercicio numero 1
// const libros = [
//   { titulo: "Cien años de soledad", 
//     autor: "Gabriel García Márquez", 
//     ano: 1967 },

//   { titulo: "Don Quijote de la Mancha", 
//     autor: "Miguel de Cervantes", 
//     ano: 1605 },

//   { titulo: "1984", 
//     autor: "George Orwell", 
//     ano: 1949 }
// ];
// const autores = [libros[0].autor,libros[1].autor,libros[2].autor]
// console.log(autores)





//ejercicio numero 2
// const empleado = {nombre: 'Juan', salario: 10000, antiguedad: 6};

// if (empleado.antiguedad>5){

// empleado.salario = (empleado.salario*0.1)+empleado.salario
// console.log(`el nombre del empleado es: ${empleado.nombre}`)
// console.log(`el sueldo del empleado es ${empleado.salario}`)
// console.log(`la antiguedad del empleado es: ${empleado.antiguedad}`)

// console.log(empleado)
// } else {

//   console.log(`el nombre del empleado es: ${empleado.nombre}`)
//   console.log(`el sueldo del empleado es ${empleado.salario}`)
//   console.log(`la antiguedad del empleado es: ${empleado.antiguedad}`)
//   console.log(empleado)
// }


///ejercicio numero 3 y 4
// const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]

// const numeromayor = Math.max(...numeros);
// console.log(`El numero mayor es:  ${numeromayor}`)
 
// const numeroimpar = numeros.filter(numero => numero%2 !==0)
// const sumaimpares = (numeroimpar.reduce((acumulador, numero)=> acumulador + numero,0))
// const promedio = sumaimpares/(numeroimpar.length)
// console.log(`el promedio de los numeros impares es: ${promedio}`)


//ejercicio numero 5
// const persona = {nombre: "Ana",
//   edad: 25,
//   ciudad: "SPS"
// }

// const name = persona.nombre
// const age = persona.edad
// const city = persona.ciudad

// console.log(name)
// console.log(age)
// console.log(city)

//fin



//////////////

function nueva(a,b) { 
    
    return new Promise((resolve,reject)=>{
        const l = 1;

        if (l == 1){
            resolve(a+b)
        }else{
            reject(a-b)
        }
    });
}
nueva(1,1)
.then((mensaje)=>{
    console.log(mensaje)
})

nueva(1,1)
.catch((error)=>{
    console.log('error',error)
})


//////////


async function nueva(a, b) {
    const l = 1;
  
    if (l == 1) {
      return a + b;
    } else {
      throw new Error;
    }
  }
  
  async function ejecutarNueva() {
    try {
      const mensaje = await nueva(1, 1);
      console.log(mensaje); // 2
    } catch (error) {
      console.log('error', error);
    }
  }
  
  ejecutarNueva();



//////////

//   function lol(a,b) {
//     return new Promise((resolve,reject)=>{
//         const l = 4

//         if (l==1){
//             resolve(a+b)

//         }else{
//             reject(error)
//         }
//     })
//   }

//   lol(1,1)
//         .then((mensaje)=>{
//             console.log(mensaje)
//         })
// lol(1,1)
//         .catch((error)=>{
//             console.log(error)


//         })


