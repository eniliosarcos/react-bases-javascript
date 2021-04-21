
// const getImagenPromesa = () => new Promise(resolve => resolve('askdjnadkjsa'))
// getImagenPromesa().then(console.log);

const getImagen = async() => {

    try {

        const apiKey = 'CNhys6lTX5HxXPo3mC6g0EQAWmOaeqVD';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
    
        document.body.appendChild(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }
}

getImagen();