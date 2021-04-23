import { getUser, getUsuarioActivo } from "../../bases/05-funciones"

describe('Pruebas de 05-funciones.js', () => {
    
    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'eniliox';

        const userTest = {
            uid: 'abc567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    });
});
