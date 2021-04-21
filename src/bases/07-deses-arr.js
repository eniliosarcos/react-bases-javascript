

const personajes = ['goku', 'vegeta', 'trunks'];

const [ , , p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);

//Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
// const userState = (valor)=>{
//     return [valor, ()=> {console.log('hola mundo')}]
// }
// const arr = userState('Goku');

// console.log(arr);

// console.log(nombre);

//solucion

const userState = (valor)=>{
    return [valor, ()=> {console.log('hola mundo')}]
}
const [nombre, setNombre] = userState('Goku');

console.log(nombre);
setNombre();