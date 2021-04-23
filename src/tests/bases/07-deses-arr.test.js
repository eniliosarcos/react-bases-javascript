import { retornaArreglo } from "../../bases/07-deses-arr";


describe('Pruebas en 07-deses-arr.js', () => {

    test('Debe de retornar un string y un numero', () => {
        
        const [letras, numeros] = retornaArreglo(); //['ABC', 123];

        expect(letras).toBe('ABC');
        expect(numeros).toEqual(123);
    });
    
});
