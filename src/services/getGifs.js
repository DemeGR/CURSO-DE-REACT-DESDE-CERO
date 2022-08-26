const apiKey = 'sOwBV2wN7m3pdBD9wDe5cJY5AMHVEVA8'

export default function getGifs({keyword = 'morty'} = {}/*un valor por defecto*/){
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

    return  fetch(apiURL)
      .then(res => res.json())//de la respuesta convertirla como ojson
      .then(response => {
        const {data/*es un array */=[]} = response
        if(Array.isArray(data)) {  
          const gifs = data.map(image => {  
            const {images, title, id}=image
            const {url}=images.downsized_medium
            return {title, id, url} 
          })
          return gifs
        }
      })
}