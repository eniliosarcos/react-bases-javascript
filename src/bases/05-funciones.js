

// Funciones en JS
// const saludar = function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) =>  `Hola ${nombre}`;

const saludar4 = () =>  `Hola mundo`;


export const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});


//tarea
//1. transformen a una funcion de flecha
//2. tiene que retornar un objeto implicito
//3. pruebas
// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'abc567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('enilio');
// console.log(usuarioActivo);

//Solucion
export const getUsuarioActivo = (nombre) => ({
    uid: 'abc567',
    username: nombre
});

// const usuarioActivo = getUsuarioActivo('enilio');
// console.log(usuarioActivo);