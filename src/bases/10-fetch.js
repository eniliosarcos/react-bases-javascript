
const apiKey = 'CNhys6lTX5HxXPo3mC6g0EQAWmOaeqVD';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.appendChild(img);
    })
    .catch(console.warn);

