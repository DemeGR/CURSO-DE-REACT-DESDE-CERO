import  {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = [] }= apiResponse
  return data
}

export default function getTrendingTerms(){
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
    return  fetch(apiURL)
      .then(res => res.json())//de la respuesta convertirla como ojson
      .then(fromApiResponseToGifs)
}
