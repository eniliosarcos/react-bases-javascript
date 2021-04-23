import { getHeroeByIdAsync } from "../../bases/09-promesas";
import { heroes } from '../../data/heroes';


describe('Pruebas en 09-promesas.test.js', () => {
    
    test('getHeroeByIdAsync Debe retornar un heroe async', () => {

        const id = 1;

        return expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);
    });  

    test('getHeroeByIdAsync Debe retornar un error si el heroe por id no existe', () => {

        const id = 10;

        return expect(getHeroeByIdAsync(id)).rejects.toBe('No se pudo encontrar el Heroe');
    });  
});
