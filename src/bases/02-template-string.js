

const nombre = 'enilio';
const apellido = 'sarcos';

const nombreCompleto = `${nombre} ${apellido}`

// console.log(nombreCompleto);

export function getSaludo(nombre = 'enilio!') {
    return 'hola '+ nombre;
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`);