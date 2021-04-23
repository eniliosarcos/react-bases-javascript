import { getSaludo } from "../../bases/02-template-string";

describe('Puebas en 02-template-string.js', () => {

    test('getSaludo debe de retornar hola enilio', () => {
        
        const nombre = 'enilio'

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('hola '+ nombre);
    }) ;

    test('getSaludo debe de retornar hola enilio! si no hay argumento nombre', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('hola enilio!');
    })
    
});
