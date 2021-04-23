import {getHeroeById} from '../bases/08-import-export';

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {

//         //tarea
//         const heroe = getHeroeById(2);

//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encontrar el Heroe');
//     }, 2000);

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn(err));

export const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {

            const heroe = getHeroeById(id);

            if(heroe)
                resolve(heroe);
            else
                reject('No se pudo encontrar el Heroe');
        }, 1500);
    
    });
}

// getHeroeByIdAsync(4)
//                     .then( console.log )
//                     .catch( console.warn );


