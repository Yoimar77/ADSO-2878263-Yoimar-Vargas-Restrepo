let api_key ="67Rc8MaxsN5sO1xJUU4Knl1NkGm1oJnb";
let limit = 20;
const URL = "api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}";

const getCharacter = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    
    // Itera sobre cada elemento dentro de 'results'
    data.data[images].forEach(element => {
                   // Llama a la función makeCards con el array
    });
}