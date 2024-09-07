let api_key = "67Rc8MaxsN5sO1xJUU4Knl1NkGm1oJnb";
let limit = 50;
const container = document.querySelector(".cards-container");

const getGifs = async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        container.innerHTML = "";

        data.data.forEach(element => {
            let gif = element.images.original.url;
            makeCards(gif);
        });
    
};

function makeCards(gif) {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = gif;
    card.appendChild(img);

    container.appendChild(card);
}

const loadTrendingGifs = () => {
    const trendingURL = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=${limit}`;
    getGifs(trendingURL); 
};

const searchGifs = () => {
    const searchTerm = document.getElementById("input-character").value;

    if (searchTerm.trim() !== "") {
        let searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchTerm}&limit=${limit}`;
        getGifs(searchURL);
    } else {
        
        loadTrendingGifs();
    }
};


loadTrendingGifs();


document.getElementById("input-character").addEventListener("input", searchGifs);
