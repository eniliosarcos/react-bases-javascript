import { getImagen } from "../../bases/11-async-await"


describe('Pruebas con 11-async-await.test.js', () => {
    
    test('Debe de retornar el url de la imagen', async() => {
        
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);
    })
    
})
