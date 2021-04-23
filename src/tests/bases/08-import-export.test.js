const { getHeroeById, getHeroesByOwner } = require("../../bases/08-import-export");
const { heroes } = require("../../data/heroes");


describe('Pruebas en 08-import-export.test.js', () => {
    
    test('Debe de retornar un Heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefined si heroe por id no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un arreglo con los heroes de dc', () => {
        
        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner(owner);
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroesByOwner).toEqual(heroesData);
    });

    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner(owner);

        expect(heroesByOwner.length).toBe(2);
    }); 
});
