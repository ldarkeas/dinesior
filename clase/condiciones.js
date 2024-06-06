let n1 = 0
let n2 = NaN

if (n1===n2){
    console.log('se cumple')
} else{
    console.log('no se cumple')
}
//trhuly todos los demas escenarios
//falsy null,0, Nan, false
//nulish indefined, null

let n3;

if (n3==undefined){
    console.log('se cumple')
    console.log(typeof n2)
} else{
    console.log('no se cumple')

}


///

let n4 = 20
const edad = n4
//const edad = n4 > 18 ? 'es mayor' : 'es menor' 
console.log(edad)
///

const nombree = null
console.log(` Hola ${nombree ?? 'no hay nombre'}`)
console.log(edad)