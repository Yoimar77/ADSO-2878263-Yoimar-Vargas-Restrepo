const url = "https://rickandmortyapi.com/api/character";
const containercards = document.querySelector(".cards-container");
const inputcharacter = document.querySelector("#input-character");

// Función para obtener personajes y generar cards
const getCharacter = async () => {
    const response = await fetch(url);
    const data = await response.json();
    
    // Itera sobre cada elemento dentro de 'results'
    data.results.forEach(element => {
        let nameCard = element.name;      // Nombre del personaje
        let imageCard = element.image;    // Imagen del personaje
        let array = [nameCard, imageCard]; // Array con nombre e imagen
        makeCards(array);                 // Llama a la función makeCards con el array
    });
}

// Función para crear y agregar cards al contenedor
const makeCards = (myArray) => {
    // Crea un div para la card
    const card = document.createElement("div");
    card.classList.add("card");

    // Crea un elemento de imagen
    const img = document.createElement("img");
    img.src = myArray[1]; // La imagen está en la segunda posición del array
    img.alt = myArray[0]; // El nombre está en la primera posición del array

    // Crea un elemento para el nombre del personaje
    const name = document.createElement("h3");
    name.textContent = myArray[0]; // El nombre está en la primera posición del array

    // Añade la imagen y el nombre a la card
    card.appendChild(img);
    card.appendChild(name);

    // Añade la card al contenedor principal
    containercards.appendChild(card);
}

// Función para filtrar cards por nombre
const filterCardsByName = () => {
    const searchValue = inputcharacter.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cardName = card.querySelector("h3").textContent.toLowerCase();
        if (cardName.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Genera las cards automáticamente al cargar la página
getCharacter();

// Filtra las cards mientras se escribe en el input
inputcharacter.addEventListener("input", filterCardsByName);